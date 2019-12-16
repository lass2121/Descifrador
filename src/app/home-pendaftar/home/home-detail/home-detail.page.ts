import { Sekolah } from './../../../home-penyedia/sekolah.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HomePendaftarService } from '../../home-pendaftar.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  public sekolah : Observable<Sekolah>;
  public schoolId: string;
  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute,private pendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('schoolId')){return;}
          this.sekolah = this.pendaftarSvc.readSekolah(paramMap.get('schoolId')).valueChanges();
          this.schoolId = paramMap.get('schoolId');
      }
    );
  }

}
