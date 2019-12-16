import { Component, OnInit } from '@angular/core';
import { HomePenyediaService } from '../home-penyedia.service';

@Component({
  selector: 'app-detail-acc',
  templateUrl: './detail-acc.page.html',
  styleUrls: ['./detail-acc.page.scss'],
})
export class DetailAccPage implements OnInit {
  data: any;

  constructor(
    private penyediaSvc: HomePenyediaService
  ) { }

  ngOnInit() {
    this.penyediaSvc.requestKegiatan().subscribe((data)=>{
      this.data = data;
      console.log(data);
    });
  }

}
