import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Request } from 'src/app/home-pendaftar/request.model';

import { Sekolah } from './sekolah.model';



@Injectable({
  providedIn: 'root'
})
export class HomePenyediaService {

  request = new BehaviorSubject<Request[]>([]);
  
  data : any;

  constructor(private firestore: AngularFirestore) {

   }

   requestKegiatan() : Observable<any>{
    return this.firestore.collection<any>("request-kegiatan").valueChanges();
  }

    // readRequest(){
      
    //   return this.firestore.collection('request-kegiatan');
    // }


  //  readRequest() {
  //   console.log(this.firestore.collection("request-kegiatan").snapshotChanges());
  //   return this.firestore.collection("request-kegiatan").snapshotChanges().subscribe(data => {
  //     this.data = data.map(e => {
  //       return {
          
  //         nama : e.payload.doc.data()['nama']
  //       };
  //   });
  //   for (var  i = 0; i < this.data.length; i++) {
      
  //   }
  // });;
  // }

  getInfoPenyedia(UseriD: string): AngularFirestoreDocument<Sekolah>{
    console.log(UseriD);
    return this.firestore.collection('penyedia').doc(UseriD);
  }

}
