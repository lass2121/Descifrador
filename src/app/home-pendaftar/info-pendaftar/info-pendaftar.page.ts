import { User } from './../user.model';
import { Observable } from 'rxjs';
import { HomePendaftarService } from './../home-pendaftar.service';
import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';

import { Plugins, Capacitor, CameraSource, CameraResultType, CameraOptions, CameraPhoto } from '@capacitor/core';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-info-pendaftar',
  templateUrl: './info-pendaftar.page.html',
  styleUrls: ['./info-pendaftar.page.scss'],
})
export class InfoPendaftarPage implements OnInit {
  public user: Observable<User>;
  selectedImage: string;
  

  constructor(private loginSvc: LoginService, private pendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
    defineCustomElements(window);
    const uid = this.loginSvc.getUid();
    this.user = this.pendaftarSvc.readInfoPendaftar(uid).valueChanges();
    console.log(this.user);
    // console.log(this.pendaftarSvc.readInfoPendaftar(uid).valueChanges());
  }

  // async takePicture() {
  //   const image = await Plugins.Camera.getPhoto({
  //     quality: 90,
  //     source: CameraSource.Prompt,
  //     resultType: CameraResultType.Uri,
  //     correctOrientation: true
  //   });
  //   this.selectedImage = image.webPath;
  //   }

  // onPickImage() {
  //     if (!Capacitor.isPluginAvailable('Camera')) {
  //       return;
  //     } else {
  //       this.takePicture();
  //     }
  //   }
}
