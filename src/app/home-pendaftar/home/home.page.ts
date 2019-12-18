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
  public filteredListSekolahSearch: any[];
  public filteredListSekolahKategori: any[];
  public flagFilteredSearch: boolean;
  public flagFilteredKategori: boolean;
  selectedImage: string;
 
 

  constructor(private router: Router, private navCtrl: NavController, private pendaftarSvc: HomePendaftarService) {}

  ngOnInit() {
    defineCustomElements(window);
    this.pendaftarSvc.readAllSekolah().valueChanges()
    .subscribe(listSekolah =>  {
      this.listSekolah = listSekolah;
      this.loadedListSekolah = listSekolah;
    });
    this.flagFilteredSearch = false;
    this.flagFilteredKategori = false;
  }

  ionViewWillEnter(){
    this.flagFilteredSearch = false;
    this.flagFilteredKategori = false;
    this.initializeItems();
  }

  initializeItems(): void{
    this.listSekolah = this.loadedListSekolah;
  }

  clearFilter(){
    if(this.flagFilteredKategori){
      this.listSekolah = this.filteredListSekolahKategori;
    }else{
      this.initializeItems();
    }
    this.flagFilteredSearch = false;
  }

  filterSekolah(event){
    //jika sudah ke filter
    if(this.flagFilteredKategori){
      this.listSekolah = this.filteredListSekolahKategori;
    }else{
      this.initializeItems();
    }

    const searchWord = event.srcElement.value;

    if(!searchWord){
      if(this.flagFilteredKategori){
        this.listSekolah = this.filteredListSekolahKategori;
      }else{
        this.initializeItems();
      }
      this.flagFilteredSearch = false;
      return;
    }

    this.listSekolah = this.listSekolah.filter( currentSekolah => {
      if(currentSekolah.address && searchWord){
        if(currentSekolah.address.toLowerCase().indexOf(searchWord.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });

    this.flagFilteredSearch = true;
    this.filteredListSekolahSearch = this.listSekolah;

  }

  filterSekolahKategori(event){
    //jika sudah ke filter
    if(this.flagFilteredSearch){
      this.listSekolah = this.filteredListSekolahSearch;
    }else{
      this.initializeItems();
    }

    const searchKategori = event.srcElement.value;

    if(!searchKategori){
      return;
    }
    if(searchKategori == 'all'){
      if(this.flagFilteredSearch){
        this.listSekolah = this.filteredListSekolahSearch;
      }else{
        this.initializeItems();
      }
      this.flagFilteredKategori = false;
      return;
    }

    this.listSekolah = this.listSekolah.filter( currentSekolah => {
      if(currentSekolah.educationalStage && searchKategori){
        if(currentSekolah.educationalStage.toLowerCase().indexOf(searchKategori.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });

    this.flagFilteredKategori = true;
    this.filteredListSekolahKategori = this.listSekolah;
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
