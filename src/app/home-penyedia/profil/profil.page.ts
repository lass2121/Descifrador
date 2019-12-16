import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sekolah } from '../sekolah.model';
import { LoginService } from 'src/app/login/login.service';
import { HomePenyediaService } from '../home-penyedia.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public penyedia: Observable<Sekolah>;

  constructor(
    private loginSvc: LoginService,
    private penyediaSvc: HomePenyediaService
  ) { }

  ngOnInit() {
    let uid = this.loginSvc.getUid();
    this.penyedia = this.penyediaSvc.getInfoPenyedia(uid).valueChanges();
    console.log(this.penyedia);
  }
}
