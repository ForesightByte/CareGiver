import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Userelement} from './users';
import {AlertController} from '@ionic/angular';
import {PercentageComponent} from './percentage/percentage.component';

@Injectable()
export class UserService {
    public user$: Observable<Userelement[]>;
    public userCollection: AngularFirestoreCollection<Userelement>;
    public displayName: string;
    public userId: string;
    public wellbeingScore = 0;


    constructor(
        private afStore: AngularFirestore,
        private alert: AlertController,
        private score: PercentageComponent
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

    // Set userelement to current user
    // setUsers(user: any) {
    //     return this.users = user;
    // }

    getUser(id: string): Observable<Userelement> {
        return this.afStore.collection('users').doc<Userelement>(id).valueChanges().pipe(
            take(1),
            map(user => {
                return user;
            })
        );
    }

    getDisplayname(id: string) {
        return this.afStore.collection('users').doc<Userelement>(id).valueChanges().pipe(
            take(1),
            map(user => {
                this.displayName = user.displayName;
                this.userId = user.garminUserId;
                this.wellbeingScore = user.wellbeingScore;
                console.log('score', this.wellbeingScore);
                return user.displayName;
            })
        );
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
