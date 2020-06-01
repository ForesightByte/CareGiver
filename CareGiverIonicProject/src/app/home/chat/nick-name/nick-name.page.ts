import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.page.html',
  styleUrls: ['./nick-name.page.scss'],
})

export class NickNamePage implements OnInit {
  data = { nickName: '' };
  constructor(
    private router: Router
  ) { }

  enterNickname() {
    const navExtras: NavigationExtras = {
      queryParams: {
        nickName: this.data.nickName
      }
    };
    this.router.navigate(['room'], navExtras);
  }
  ngOnInit() {
  }

}
