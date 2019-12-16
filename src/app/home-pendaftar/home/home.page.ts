import { HomePendaftarService } from './../home-pendaftar.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { Plugins, Capacitor, CameraSource, CameraResultType, CameraOptions, CameraPhoto } from '@capacitor/core';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listSekolah;
  selectedImage: string;

  constructor(private router: Router, private navCtrl: NavController, private pendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
    defineCustomElements(window);
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

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Uri,
      correctOrientation: true
    });
    this.selectedImage = image.webPath;
    }

  onPickImage() {
      if (!Capacitor.isPluginAvailable('Camera')) {
        return;
      } else {
        this.takePicture();
      }
    }

    onFileChosen(evt: Event) {
      console.log(evt);
      const pickedFile = (evt.target as HTMLInputElement).files[0];
      const fr = new FileReader();
      fr.onload = () => {
        const dataUrl = fr.result.toString();
        this.selectedImage = dataUrl;

        const file = this.selectedImage;
        // Upload file and metadata to the object 'images/mountains.jpg'
        const uploadTask = firebase.storage().ref().child('images/newBird.jpg').putString(file, 'data_url');

        console.log('jalan');
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          (snapshot) => {
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
          });
        });
      };
      fr.readAsDataURL(pickedFile);
    }

}
