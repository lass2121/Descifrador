import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.page.html',
  styleUrls: ['./detail-request.page.scss'],
})
export class DetailRequestPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/home-penyedia/request');
  }

}
