import {Component, OnInit, ViewChild} from '@angular/core';
import * as firebase from 'firebase/app';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {IonContent} from '@ionic/angular';
import {AuthService} from 'src/app/auth.service';
import {UserService} from 'src/app/user.service';

export const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  data = {type: '', displayName: '', message: ''};
  chats: any = [];
  roomkey: any = null;
  displayName: string = null;
  offStatus: boolean;
  @ViewChild(IonContent, {static: false}) content: IonContent;

  constructor(
    private Aroute: ActivatedRoute,
    private router: Router,
    public user: UserService,
    private auth: AuthService) {
    const uid = this.auth.cUid;
    this.displayName = this.user.displayName;
    console.log('dispname', this.displayName);
    this.roomkey = 'chatroom';

    this.offStatus = false;
    this.data.type = 'message';
    this.data.displayName = this.displayName;

    const joinData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    joinData.set({
      type: 'join',
      user: this.displayName,
      message: this.displayName + ' has joined this room.',
      sendDate: Date()
    });
    this.data.message = '';

    firebase.database().ref('chatrooms/' + this.roomkey + '/chats').on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      console.log(this.chats);
      setTimeout(() => {
        if (this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  ngOnInit() {
  }

  sendMessage() {
    const newData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    newData.set({
      type: this.data.type,
      user: this.data.displayName,
      message: this.data.message,
      sendDate: Date()
    });
    this.data.message = '';
  }

  exitChat() {
    const exitData = firebase.database().ref('chatrooms/' + this.roomkey + '/chats').push();
    exitData.set({
      type: 'exit',
      user: this.displayName,
      message: this.displayName + ' has exited this room.',
      sendDate: Date()
    });
    this.offStatus = true;

    const navExtras: NavigationExtras = {
      queryParams: {
        displayName: this.displayName
      }
    };
    this.router.navigate(['/'], navExtras);
  }

}
