import { Component, OnInit } from '@angular/core';
import { HomePenyediaService } from '../home-penyedia.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Request } from 'src/app/home-pendaftar/request.model';

@Component({
  selector: 'app-detail-acc',
  templateUrl: './detail-acc.page.html',
  styleUrls: ['./detail-acc.page.scss'],
})
export class DetailAccPage implements OnInit {
  public request : Observable<Request>;

  data: any;
  data2: any;
  key: any;
  users: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homePenyediaSvc: HomePenyediaService
  ) { }

  ngOnInit() {
    // this.penyediaSvc.requestKegiatan().subscribe((data)=>{
    //   this.data = data;
    //   console.log(data);
    // });

    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('requestId')){return;}
          this.request = this.homePenyediaSvc.readDetailRequest(paramMap.get('requestId')).valueChanges();
          this.key = ((paramMap.get('requestId')));
          console.log(this.request);
      }
    );
  }

}
