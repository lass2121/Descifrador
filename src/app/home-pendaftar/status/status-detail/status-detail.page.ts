import { Request } from 'src/app/home-pendaftar/request.model';
import { HomePendaftarService } from './../../home-pendaftar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.page.html',
  styleUrls: ['./status-detail.page.scss'],
})
export class StatusDetailPage implements OnInit {
  public request : Observable<Request>;
  //jika status true maka sudah bisa feedback
  public status: boolean;
  public requestID: string;
  
  constructor(
    private pendaftarSvc: HomePendaftarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

    
  ngOnInit() {
    this.getData().then(
      value => {
        value.subscribe(val => {
          console.log(val);
          if(val.status == 'Approved' && val.review == ''){
            this.status = true;
          }else{
            this.status = false;
          }
        })
      }
    )
  }

  getData(){
    return new Promise<any>((resolve,reject) => {
      this.activatedRoute.paramMap.subscribe(
        paramMap => {
          if(!paramMap.has('requestId')){return;}
            this.requestID = paramMap.get('requestId');
            this.request = this.pendaftarSvc.readRequest(paramMap.get('requestId')).valueChanges();
            resolve(this.request);
        }
      )
    })
  }

  goReview(){
    this.router.navigateByUrl('home-pendaftar/tabs/status/review/' + this.requestID);
  }
}
