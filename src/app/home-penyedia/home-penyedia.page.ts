import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomePenyediaService } from './home-penyedia.service';

@Component({
  selector: 'app-home-penyedia',
  templateUrl: './home-penyedia.page.html',
  styleUrls: ['./home-penyedia.page.scss'],
})
export class HomePenyediaPage implements OnInit {
  
  constructor(
    private navCtrl: NavController, 
    private homepenyediaSvc : HomePenyediaService
  ) { }

  ngOnInit() {
   
}

  goBack(){
    this.navCtrl.navigateBack('/login');
  }

  goProfil(){
    this.navCtrl.navigateForward('/home-penyedia/profil');
  }

}
