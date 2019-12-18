import { Component, OnInit } from '@angular/core';
import { HomePenyediaService } from '../home-penyedia.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';



@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  //public user : Observable<Request>;
  users: any;
 // data: Observable<Req>;
  public data ;
  constructor(
    private homePenyediaSvc : HomePenyediaService,
    private firestore: AngularFirestore,
   
    
  ) { }

  ngOnInit() {
    this.homePenyediaSvc.readRequest().snapshotChanges().subscribe(data => {
      this.data = data.map(e => {
        return{
          $key: e.payload.doc.id,
          $value : e.payload.doc.data(),
        };
      });
      console.log(this.data);
    });
   
    //this.data = this.homePenyediaSvc.readInfoPenyedia(uid).valueChanges();
    // this.homePenyediaSvc.requestKegiatan().subscribe((data)=>{
    //   this.data = data;
     
    // } );


    // console.log(this.homePenyediaSvc.readRequest());
    // this.homePenyediaSvc.readRequest();
  }


  
}
