import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomePendaftarService } from '../home-pendaftar.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {
  public listRequest;
  constructor(
    private router: Router, 
    private navCtrl: NavController, 
    private pendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
    this.pendaftarSvc.readAllRequest().snapshotChanges().subscribe(data => {
      this.listRequest = data.map(e => {
        return{
          $key: e.payload.doc.id,
          $value : e.payload.doc.data(),
        };
      });
      console.log(this.listRequest);
    });
    
  }

  ionViewWillEnter(){
    this.pendaftarSvc.readAllRequest().snapshotChanges().subscribe(data => {
      this.listRequest = data.map(e => {
        return{
          $key: e.payload.doc.id,
          $value : e.payload.doc.data(),
        };
      });
      console.log(this.listRequest);
    });
  }

}
