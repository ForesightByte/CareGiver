import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor
} from '@capacitor/core';
import { Router } from '@angular/router';
 
const { PushNotifications } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class FcmService {
 
  constructor(private router: Router) { }
 
  public initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }
 
  private registerPush() {
    PushNotifications.requestPermission().then(result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token.value));
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        alert(JSON.stringify(notification.body));
      }
    );
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        console.log('Action performed: ' + JSON.stringify(notification.notification));
      }
    );
  }
}