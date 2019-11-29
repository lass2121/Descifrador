import { Component, OnInit } from '@angular/core';
import { HomePenyediaService } from '../home-penyedia.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  data : any;
  constructor(
    private homePenyediaSvc : HomePenyediaService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.homePenyediaSvc.requestKegiatan().subscribe((data)=>{
      this.data = data;
      console.log(data);
    } );


    // console.log(this.homePenyediaSvc.readRequest());
    // this.homePenyediaSvc.readRequest();
  }


  
}
