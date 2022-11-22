# Ruchertilia

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Personal doc
## Useful links
Development done after following this formation : 
https://www.udemy.com/course/angular7-firebase-2019/learn/lecture/13656784

Google console for Maps Api : https://console.cloud.google.com/google/maps-apis/

AWS console for email service SES : https://eu-west-3.console.aws.amazon.com/ses/home

Firebase console for backend : https://console.firebase.google.com

Angularfire : https://github.com/angular/angularfire

## Deployment
Used angularfire to interact with firebase backend.

## Install

``ng add @angular/fire``

## Login to your google account then, init your deploy configuration, select firebase services used
``firebase login``

``firebase init``   

## Deploy application
``firebase deploy``

## Debug 
In case some error like 

"_Error: There was an error reading functions\package.json:   functions\lib\index.js does not exist, can't deploy Cloud Functions_"

Try using this in *_functions_* repo : ``npm run-script build``
