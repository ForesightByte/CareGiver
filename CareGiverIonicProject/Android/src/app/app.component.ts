import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {FCM} from '@ionic-native/fcm/ngx';
import {
  Plugins,
  KeyboardInfo,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';

const { Keyboard } = Plugins;
const { PushNotifications } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM
  ) {
   // this.initializeApp();
   this.keyboard();
   this.pushNotification();
  }

  keyboard() {
    Keyboard.addListener('keyboardWillShow', (info: KeyboardInfo) => {
      console.log('keyboard will show with height', info.keyboardHeight);
    });
    
    Keyboard.addListener('keyboardDidShow', (info: KeyboardInfo) => {
      console.log('keyboard did show with height', info.keyboardHeight);
    });
    
    Keyboard.addListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });
    
    Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard did hide');
    });
    
    // window events
    
    window.addEventListener('keyboardWillShow', (e) => {
      console.log('keyboard will show with height', (<any>e).keyboardHeight);
    });
    
    window.addEventListener('keyboardDidShow', (e) => {
      console.log("keyboard did show with height", (<any>e).keyboardHeight);
    });
    
    window.addEventListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });
    
    window.addEventListener('keyboardDidHide', () => {
      console.log('keyboard did hide');
    });
    
    // API
    
    Keyboard.setAccessoryBarVisible({isVisible: false});
    
    Keyboard.show();
    
    Keyboard.hide();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });
    });
  }

  /*unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }*/

  pushNotification() {
    console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ' + JSON.stringify(token.value));
      }
    );

    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        alert(JSON.stringify(notification.body));
      }
    );

    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
}
