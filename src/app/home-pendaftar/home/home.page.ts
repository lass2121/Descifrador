import { HomePendaftarService } from './../home-pendaftar.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listSekolah: any[];
  public loadedListSekolah: any[];
  selectedImage: string;
 
 

  constructor(private router: Router, private navCtrl: NavController, private pendaftarSvc: HomePendaftarService) {}

  ngOnInit() {
    defineCustomElements(window);
    this.pendaftarSvc.readAllSekolah().valueChanges()
    .subscribe(listSekolah =>  {
      this.listSekolah = listSekolah;
      this.loadedListSekolah = listSekolah;
    });
    
  }

  initializeItems(): void{
    this.listSekolah = this.loadedListSekolah;
  }

  filterSekolah(event){
    this.initializeItems();

    const searchWord = event.srcElement.value;

    if(!searchWord){
      return;
    }

    this.listSekolah = this.listSekolah.filter( currentSekolah => {
      if(currentSekolah.schoolName && searchWord){
        if(currentSekolah.schoolName.toLowerCase().indexOf(searchWord.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    })
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
