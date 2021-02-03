import {Component, OnInit} from '@angular/core';
import {AngularFirestore,} from '@angular/fire/firestore';

import {AngularFireStorage} from '@angular/fire/storage';
import {UserService} from '../user.service';
import {Userelement} from '../users';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';
import {NavController} from '@ionic/angular';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  firstName: Userelement = null;
  lastName: Userelement = null;
  gender: Userelement = null;
  age: Userelement = null;
  skills: Userelement = null;

  imgSrc: any = '../../assets/lastDINO.png';
  srcUrl: any = null;
  photoURL: Userelement = null;


  completedTags = [
    'Cooking',
    'Cleaning',
    'Communication',
    'Critical Thinking',
    'Kindness',
    'Physical Endurance',
    'Patient Care',
    'Patient Assessment',
    'Infection Control',
    'Catheterization',
    'Telemetry',
    'Empathy',
    'Cultural Awareness',
    'Professionalism',
    'Attention to Detail'
  ];

  constructor(
    private afStore: AngularFirestore,
    private afstg: AngularFireStorage,
    private router: Router,
    public Uauth: AuthService,
    public navCtrl: NavController,
    public userS: UserService) {
  }

  ngOnInit() {
  }

  // This function upload photo on firebase storage and convert it into url
  fileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.srcUrl = event.target.files[0];

      const filepath = `proPic/${this.srcUrl.name}_${new Date().getTime()}`;
      const fileref = this.afstg.ref(filepath);
      this.afstg.upload(filepath, this.srcUrl).snapshotChanges().pipe(
        finalize(() => {
          fileref.getDownloadURL().subscribe((url) => {
            this.photoURL = url;
          });
        })
      ).subscribe();
    }
  }

  // store user's information in firebase
  async createProfile() {
    const firstName = this.firstName;
    const lastName = this.lastName;
    const age = this.age;
    const gender = this.gender;
    const skills = this.skills;
  //  const photoURL = this.photoURL;

    const uProfile = this.afStore.doc(`users/${this.Uauth.cUid}`);
    const data = {
      firstName,
      lastName,
      gender,
      age,
      skills
     // photoURL
    };
    uProfile.update(data);
    this.router.navigate(['/profile']);
  }

}
