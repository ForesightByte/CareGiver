import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarminService {
  public userCollection: AngularFirestoreCollection<any>;

  constructor(
    private afStore: AngularFirestore) {
  }

  getGarminDataset(uid: string) {
    this.userCollection = this.afStore.collection('users').doc(uid).collection<any>('garmin');
    return this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getGarmin(uid: any, date: string): Observable<any> {
    return this.afStore.collection('users').doc(uid)
      .collection('garmin').doc<any>(date).valueChanges().pipe(
        take(1),
        map(user => {
          return user;
        })
      );
  }
}
