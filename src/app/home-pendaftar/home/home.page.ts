import { HomePendaftarService } from './../home-pendaftar.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listSekolah;
  constructor(private router: Router, private navCtrl: NavController, private pendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
    this.listSekolah = this.pendaftarSvc.readAllSekolah().valueChanges();
  }

  onMove(){
    this.router.navigate(['/home-pendaftar/tabs/home/a1'])
  }

  goInfoPenyedia(){
    this.router.navigate(['/home-pendaftar/info-pendaftar'])
  }

  logout(){
    this.navCtrl.navigateBack(['/login']);
  }

}
