import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor,
  PushNotificationDeliveredList
} from '@capacitor/core';

import { AngularFirestore } from '@angular/fire/firestore';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private afs: AngularFirestore) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }
 
  private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        alert('My token: ' + JSON.stringify(token));
        const div = this.afs.collection('devices');
        const data = JSON.stringify(token);
        return div.doc('token').set(data);
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log('Push received: ' + JSON.stringify(notification.notification));
      }
    );

  }
}
