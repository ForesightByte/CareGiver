import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AlertController} from '@ionic/angular';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GarminService {
  public user$: Observable<any[]>;
  public userCollection: AngularFirestoreCollection<any>;
  uid;

  constructor(
    private afStore: AngularFirestore,
    private alert: AlertController,
    private auth: AuthService) {
      this.uid = this.auth.cUid;

      this.userCollection = this.afStore.collection<any>('users').doc(this.uid).collection<any>('garmin');
      this.user$ = this.userCollection.snapshotChanges().pipe(
              map(actions => {
              return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
              });
      })
      );
    }

    getGarmin(uid: any, date: string): Observable<any> {
      return this.afStore.collection('users').doc(uid)
      .collection('garmin').doc<any>(date).valueChanges().pipe(
      take(1),
      map( user => {
        return user;
      })
      );
    }
}
