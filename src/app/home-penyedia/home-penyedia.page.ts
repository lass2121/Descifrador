import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomePenyediaService } from './home-penyedia.service';
import { LiteralExpr } from '@angular/compiler';

@Component({
  selector: 'app-home-penyedia',
  templateUrl: './home-penyedia.page.html',
  styleUrls: ['./home-penyedia.page.scss'],
})
export class HomePenyediaPage implements OnInit {
  data: any;
  
  constructor(
    private navCtrl: NavController, 
    private homePenyediaSvc : HomePenyediaService
  ) { }

  ngOnInit() {
    this.homePenyediaSvc.getApprovedRequest().snapshotChanges().subscribe(data => {
      this.data = data.map(e => {
        return{
          $key: e.payload.doc.id,
          $value : e.payload.doc.data(),
        };
      });
      console.log(this.data);
    });
  }

  goBack(){
    this.navCtrl.navigateBack('/login');
  }

  goProfil(){
    this.navCtrl.navigateForward('/home-penyedia/profil');
  }

}
