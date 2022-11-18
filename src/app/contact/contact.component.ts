import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  // Contact form
  contactForm!: FormGroup;
  gmail = environment.googleEmail;
  adresse = environment.adresse;
  phone = environment.phone;

  ngOnInit(): void {
    this.buildForm();
  }

  async onSubmit() {


    let contact = this.contactForm.value;
    contact = {...contact};

    const client = new SESClient({
      region: "eu-west-3",
      credentials: {
        accessKeyId: environment.aws.accessKeyID,
        secretAccessKey: environment.aws.secretAccessKey,
      }
    });

    const params = {
      Destination: {
        ToAddresses: [
          this.gmail
        ]
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: contact.message + '\n\nMail envoyé automatiquement depuis la page contact par ' + contact.name + ' ' + contact.email
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: contact.subject + ' - expéditeur : ' + contact.email
        }
        },
      Source: this.gmail,
    };
    const command = new SendEmailCommand(params);

    try {
      const data = await client.send(command);
      console.log('Mail envoyé !')
      // process data.
    } catch (error) {
      console.error(error)
    } finally {
      this.contactForm.reset();
    }
  }

  private buildForm(): void {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: ['', [Validators.required, Validators.email]],
      subject: '',
      message: '',
    });
  }

  // Google maps
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 45.823187, lng: 5.668441},  // 34 chemin des lauriers 01300 Cuzieu
    zoom: 18,
  };
  marker = {
    position: {lat: 45.823187, lng: 5.668441}
  };

  constructor(httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + environment.googlemap.apiKey, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

}
