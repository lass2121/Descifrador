import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from '../map-modal/map-modal.component';

// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PlaceService } from '../place.service';
// import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private placeSvc: PlaceService, private http: HttpClient) { }
  ngOnInit() { }

  async onPickLocation() {
    const modal = await this.modalCtrl.create({
      component: MapModalComponent
    });
    modal.onDidDismiss().then((modalData) => {
      console.log(modalData.data);
      this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(
        (address) => {
          // console.log(address);
          this.placeSvc.setAddress(address);
        }
      );
    });
    return await modal.present();
  }

  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key= AIzaSyBjXaEBb57wWm4NE4cS0dtWykR9G-SgqRE`)
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || !geoData.results.length) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }
}
