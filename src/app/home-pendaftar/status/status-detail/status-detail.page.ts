import { Request } from 'src/app/home-pendaftar/request.model';
import { HomePendaftarService } from './../../home-pendaftar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.page.html',
  styleUrls: ['./status-detail.page.scss'],
})
export class StatusDetailPage implements OnInit {
  public request : Observable<Request>;
  constructor(
    private pendaftarSvc: HomePendaftarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('requestId')){return;}
          this.request = this.pendaftarSvc.readRequest(paramMap.get('requestId')).valueChanges();
      }
    );
  }

}
