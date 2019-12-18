import { Request } from 'src/app/home-pendaftar/request.model';
import { Sekolah } from './../home-penyedia/sekolah.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomePendaftarService {
  // request = new BehaviorSubject<Request[]>([]);
  constructor(private firestore: AngularFirestore,private loginSvc: LoginService) { }

  addRequest(data: any) {
    return this.firestore.collection('request-kegiatan').add(data);
  }

  readAllRequest() {
    let uid = this.loginSvc.getUid();
    return this.firestore.collection('request-kegiatan',ref => 
    ref
      .where('requesterID','==',uid)
      .where('review', '==', '')
    );
  }

  readReviews(schoolID: string){
    return this.firestore.collection('request-kegiatan',ref => 
    ref
      .where('schoolID','==',schoolID)
      .orderBy('review','asc')
      .startAfter('')
      
    );
  }

  readRequest(reqID: string):AngularFirestoreDocument<Request>{
    return this.firestore.collection('request-kegiatan').doc(reqID);
  }

  updateRequestReview(reqID: string, review:string){
    this.firestore.collection('request-kegiatan').doc(reqID).update({
      review: review
    });
  }

  readInfoPendaftar(UseriD: string): AngularFirestoreDocument<User>{
    return this.firestore.collection('users').doc(UseriD);
  }

  readAllSekolah(){
    return this.firestore.collection('penyedia');
  }

  readSekolah(UseriD: string): AngularFirestoreDocument<Sekolah>{
    console.log(UseriD);
    return this.firestore.collection('penyedia').doc(UseriD);
  }

}
