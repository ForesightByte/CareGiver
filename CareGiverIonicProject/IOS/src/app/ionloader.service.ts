import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonloaderService {

  constructor(public loadingController: LoadingController) { }
// Simple loader
simpleLoader() {
  this.loadingController.create({
    message: 'Please be patient...',
    spinner: "lines"
  }).then((response) => {
    response.present();
  });
}

// Dismiss loader
dismissLoader() {
  this.loadingController.dismiss().then((response) => {
    console.log('Loader closed!', response);
  }).catch((err) => {
    console.log('Error occured : ', err);
  });
}

// Auto hide show loader
autoLoader() {
  this.loadingController.create({
    message: 'Loading....',
    duration: 3000,
    translucent: true
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
    });
  });
}   

// Custom style + hide on tap loader
customLoader() {
  this.loadingController.create({
    message: 'Loader with custom style',
    duration: 4000,
    cssClass:'loader-css-class',
    backdropDismiss:true
  }).then((res) => {
    res.present();
  });
}   
}
