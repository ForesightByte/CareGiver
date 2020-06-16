import {Component, OnInit} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../../user.service';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Userelement} from 'src/app/users';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  displayName: Observable<any>;
  score: number;
  scoreColor = 'red';
  defaultColor = 'rgba(0, 0, 0, 0.200)';

  constructor(
    private router: Router,
    private afStore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    public user: UserService,
    public actionSheetController: ActionSheetController) {
    const uid = this.auth.cUid;
    this.displayName = this.user.getDisplayname(uid);
  }

  ngOnInit() {
    const data = this.afStore.collection('users').doc<Userelement>(this.auth.cUid).valueChanges().pipe(
      take(1),
      map(user => {
        return user;
      })
    );
    data.subscribe(score => {
      this.score = score.wellbeingScore;
      this.formatSubtitle(this.score);
    });
  }

  formatSubtitle = (score: number): string => {
    if (score < 20) {
      this.scoreColor = 'red';
      return 'Distressing';
    } else if (score < 40) {
      this.scoreColor = 'orange';
      return 'Substandard';
    } else if (score < 60) {
      this.scoreColor = 'gold';
      return 'Ordinary';
    } else if (score < 80) {
      this.scoreColor = 'lightgreen';
      return 'Adequate';
    } else {
      this.scoreColor = 'green';
      return 'Impressive';
    }
  }

  async overlap() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tools',
      cssClass: 'EditIcon',
      buttons: [{
        text: 'Profile',
        role: 'information',
        icon: 'contact',
        handler: () => {
          return this.router.navigate(['./profile']);
        }
      }, {
        text: 'Settings',
        role: 'settings',
        icon: 'settings',
        handler: () => {
          return this.router.navigate(['./settings']);
        }
      }, {
        text: 'Sign Out',
        icon: 'power',
        handler: () => {
          this.afAuth.auth.signOut();
          return this.router.navigate(['/tabs']);
        }
      }]
    });
    await actionSheet.present();
  }
}
