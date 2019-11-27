import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history-request-detail',
  templateUrl: './history-request-detail.page.html',
  styleUrls: ['./history-request-detail.page.scss'],
})
export class HistoryRequestDetailPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/home-penyedia/history-request');
  }

}
