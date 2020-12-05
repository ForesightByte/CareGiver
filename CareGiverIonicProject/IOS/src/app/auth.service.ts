import {Injectable} from '@angular/core';
import {Userelement} from './users';

import {AngularFireAuth} from '@angular/fire/auth';

import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  verifiedEmail = true;
  emailVerified: boolean;
  user$: Observable<Userelement>;
  uInfo: Userelement = null;

  constructor(
    private afAuth: AngularFireAuth) {

    // to make user authenticated
    this.user$ = this.afAuth.authState;
    this.user$.subscribe((user) => {
      if (user) {
        this.uInfo = user;
      } else {
        this.uInfo = null;
      }
    });

    // check user email varified or not
  //  this.afAuth.authState.subscribe(user => {
    //  if (user) {
    //    setInterval(() => {
         // if (this.afAuth.auth.currentUser.emailVerified) {
        //    this.verifiedEmail = this.afAuth.auth.currentUser.emailVerified;
        //  } else { this.verifiedEmail = false; }
    //    }, 1000);
    //  }
   // });
  }

  // check authenticated or not
  get authenticated(): boolean {
    return this.uInfo !== null;
  }

  // to get user data
  get cUid(): any {
    return this.authenticated ? this.uInfo.uid : null;
  }

  refresh() {
    window.location.reload();
  }
}

