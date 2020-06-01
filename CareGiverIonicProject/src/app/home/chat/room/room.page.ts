import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import * as firebase from 'Firebase';
import {UserService} from 'src/app/user.service';
import {AuthService} from 'src/app/auth.service';

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
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})

export class RoomPage implements OnInit {
  displayName: string;
  admin = false;
  nickName: any;
  rooms = [];
  ref = firebase.database().ref('chatrooms/');

  constructor(
    private router: Router,
    public user: UserService,
    public auth: AuthService
  ) {
    const uid = this.auth.cUid;
    this.displayName = this.user.displayName;
    console.log(this.displayName);

    // this.Aroute.queryParams.subscribe(params => {
   //   if (params && params.nickName) {
   //     this.nickName = params.nickName;
   //   }
   // });

    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });

   }
   addRoom() {
    this.router.navigate(['add-room']);
  }

  joinRoom(key: any) {
    const navExtras: NavigationExtras = {
      queryParams: {
        displayName: JSON.stringify(this.displayName),
        roomKey: JSON.stringify(key)
      }
    };
    this.router.navigate(['home'], navExtras);
  }
  ngOnInit() {
  }

}

