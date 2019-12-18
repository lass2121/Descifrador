import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomePenyediaService } from '../../home-penyedia.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Request } from 'src/app/home-pendaftar/request.model';

@Component({
  selector: 'app-history-request-detail',
  templateUrl: './history-request-detail.page.html',
  styleUrls: ['./history-request-detail.page.scss'],
})
export class HistoryRequestDetailPage implements OnInit {
  public request : Observable<Request>;

  constructor(
    private navCtrl: NavController,
    private homePenyediaSvc : HomePenyediaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        console.log(paramMap.get('requestId'));
        if(!paramMap.has('requestId')){return;}
          this.request = this.homePenyediaSvc.readDetailRequest(paramMap.get('requestId')).valueChanges();
          
      }
    );
  }

  goBack() {
    this.navCtrl.navigateBack('/home-penyedia/history-request');
  }

}
