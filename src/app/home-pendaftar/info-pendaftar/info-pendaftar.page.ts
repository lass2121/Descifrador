import { User } from './../user.model';
import { Observable } from 'rxjs';
import { HomePendaftarService } from './../home-pendaftar.service';
import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-pendaftar',
  templateUrl: './info-pendaftar.page.html',
  styleUrls: ['./info-pendaftar.page.scss'],
})
export class InfoPendaftarPage implements OnInit {
  public user : Observable<User>;

  constructor(private loginSvc: LoginService, private pendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
    let uid = this.loginSvc.getUid();
    this.user = this.pendaftarSvc.readInfoPendaftar(uid).valueChanges();
    console.log(this.user);
    // console.log(this.pendaftarSvc.readInfoPendaftar(uid).valueChanges());
    
  }

  

  

}
