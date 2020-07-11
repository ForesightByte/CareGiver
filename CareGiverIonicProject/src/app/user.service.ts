import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Userelement} from './users';
import {AlertController} from '@ionic/angular';

@Injectable()
export class UserService {
  public user$: Observable<Userelement[]>;
  public userCollection: AngularFirestoreCollection<Userelement>;
  public displayName: string;
  public garminId: string;


  constructor(
    private afStore: AngularFirestore,
    private alert: AlertController,
  ) {
    this.userCollection = this.afStore.collection<Userelement>('users');
    this.user$ = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  setUser(user: Userelement): Promise<DocumentReference> {
    return this.userCollection.add(user);
  }

  updateUser(user: Userelement): Promise<void> {
    return this.userCollection.doc(user.uid).update({
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      age: user.age,
      photoURL: user.photoURL,
      skills: user.skills
    });
  }

  deleteUser(uid: string) {
    this.userCollection.doc(uid).delete();
    console.log('Account successfully deleted!');
    return this.showAlert('Account', 'Account successfully deleted!');
  }

  getUser(id: string): Observable<Userelement> {
    return this.afStore.collection('users').doc<Userelement>(id).valueChanges().pipe(
      take(1),
      map(user => {
        return user;
      })
    );
  }

  getEma(uid: string) {
    this.userCollection = this.afStore.collection('users').doc(uid).collection('EMA');
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

  getWellScore(uid: string, date: string): Observable<Userelement> {
    console.log(uid, date);
    return this.afStore.collection('users').doc<Userelement>(uid).collection('EMA').doc<Userelement>(date)
    .valueChanges().pipe( take(1), map(user => {
      return user;
    }));
  }

  getDisplayname(id: string) {
    return this.afStore.collection('users').doc<Userelement>(id).valueChanges().pipe(
      take(1),
      map(user => {
        this.displayName = user.displayName;
        this.getGarminId(id);
        return user.displayName;
      })
    );
  }

  getGarminId(id: string) {
    return this.getUser(id).subscribe(data => {
      this.garminId = data.garminUserId;
      return this.garminId;
    });
  }

  // pop up alert message
  async showAlert(header: string, message: string) {
    const alert = this.alert.create({
      header,
      message,
      buttons: ['OK']
    });
    await (await alert).present();
  }

}
