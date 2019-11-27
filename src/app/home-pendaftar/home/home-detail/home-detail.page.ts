import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    this.navCtrl.navigateBack('/home-pendaftar/home');
  }

  onCancel(){
    this.navCtrl.navigateBack('/home-pendaftar/home');
  }

}
