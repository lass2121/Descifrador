import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private platform: Platform, private navCtrl: NavController) { }

  backButtonSubscription: any;

  ngOnInit() {
  }

  // ionViewWillEnter() {
  //   this.backButtonSubscription = this.platform.backButton.subscribe( () => {
  //     this.navCtrl.back();
  //   });
  //  }

  //  ionViewDidLeave() {
  //   this.backButtonSubscription.unsubscribe();
  //  }
}
