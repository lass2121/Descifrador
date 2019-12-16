import { Component, OnInit } from '@angular/core';
import { HomePenyediaService } from '../home-penyedia.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Request } from 'src/app/home-pendaftar/request.model';
import { LoginService } from 'src/app/login/login.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  //public user : Observable<Request>;
  data : Request[];
  constructor(
    private homePenyediaSvc : HomePenyediaService,
    private firestore: AngularFirestore,
    private loginSvc: LoginService,
    
  ) { }

  ngOnInit() {
    let uid = this.loginSvc.getUid();
    //this.data = this.homePenyediaSvc.readInfoPenyedia(uid).valueChanges();
    this.homePenyediaSvc.requestKegiatan().subscribe((data)=>{
      this.data = data;
      console.log(data);
    } );


    // console.log(this.homePenyediaSvc.readRequest());
    // this.homePenyediaSvc.readRequest();
  }


  
}
