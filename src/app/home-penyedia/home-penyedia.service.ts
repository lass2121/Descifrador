import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Request } from 'src/app/home-pendaftar/request.model';

import { Sekolah } from './sekolah.model';
import { LoginService } from '../login/login.service';



@Injectable({
  providedIn: 'root'
})
export class HomePenyediaService {

  request = new BehaviorSubject<Request[]>([]);
  
  data : any;

  constructor(private firestore: AngularFirestore,
    private loginSvc: LoginService,) {

   }

   requestKegiatan() : Observable<any>{
    return this.firestore.collection<any>("request-kegiatan").valueChanges();
  }

  readRequest() {
    let uid = this.loginSvc.getUid();
    return this.firestore.collection('request-kegiatan',ref => 
    ref.where('schoolID','==',uid ).where('status','==','Waiting Approval') );
  }

  statusRequest(data: any,reqID: string){
    return this.firestore.collection('request-kegiatan').doc(reqID).set(data,{ merge: true });
  }

    readDetailRequest(reqID: string):AngularFirestoreDocument<Request>{
      return this.firestore.collection('request-kegiatan').doc(reqID);
    }

  getInfoPenyedia(UseriD: string): AngularFirestoreDocument<Sekolah>{
    console.log(UseriD);
    return this.firestore.collection('penyedia').doc(UseriD);
  }

  getApprovedRequest() {
    let temp = "";
    let uid = this.loginSvc.getUid();
    return this.firestore.collection('request-kegiatan',ref => 
    ref.where('schoolID','==',uid ).where('status','==','Approved').where('review', '==', temp) );
  }

  readReviews(){
    let schoolID = this.loginSvc.getUid();
    return this.firestore.collection('request-kegiatan',ref => 
    ref
      .where('schoolID','==', schoolID)
      .orderBy('review','asc')
      .startAfter('')
    );
  }

}
