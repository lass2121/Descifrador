import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sekolah } from '../sekolah.model';
import { LoginService } from 'src/app/login/login.service';
import { HomePenyediaService } from '../home-penyedia.service';

import * as firebase from 'firebase/app';
import 'firebase/storage';

import { Plugins, Capacitor, CameraSource, CameraResultType, CameraOptions, CameraPhoto } from '@capacitor/core';

import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  public penyedia: Observable<Sekolah>;

  selectedImage: string;
  profileImg: string;
  public uid: string;
  isLoading = false;

  constructor(
    private loginSvc: LoginService,
    private penyediaSvc: HomePenyediaService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    defineCustomElements(window);
    this.uid = this.loginSvc.getUid();
    this.penyedia = this.penyediaSvc.getInfoPenyedia(this.uid).valueChanges();
    console.log(this.penyedia);

    const starsRef = firebase.storage().ref().child(this.uid + '/Profile.jpg');
    starsRef.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      this.profileImg = downloadURL;
    });
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

    onFileChosen(evt: Event) {
      const pickedFile = (evt.target as HTMLInputElement).files[0];
      const fr = new FileReader();
      fr.onload = () => {
        const dataUrl = fr.result.toString();
        this.selectedImage = dataUrl;

        const file = this.selectedImage;
        // Upload file and metadata to the object 'images/mountains.jpg'
        console.log('UID = ' + this.uid);
        const uploadTask = firebase.storage().ref().child(this.uid + '/Profile.jpg').putString(file, 'data_url');

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
            this.presentLoading();
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, (error) => {

          console.log('ERRORRR');
        }, () => {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.profileImg = downloadURL;
          });
          this.dismiss();
        });
      };
      fr.readAsDataURL(pickedFile);
    }

    async presentLoading() {
      this.isLoading = true;
      return await this.loadingCtrl.create({
        message: 'Uploading . . .'
      }).then(a => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    }

    async dismiss() {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
    }
}
