import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Rucher Tilia';
  constructor() { }

  ngOnInit(): void {
  }
  getTitle(): string{
    return this.title;
  }

}
