import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';



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

   readRequest() {
    console.log(this.firestore.collection("request-kegiatan").snapshotChanges());
    return this.firestore.collection("request-kegiatan").snapshotChanges().subscribe(data => {
      this.data = data.map(e => {
        return {
          
          nama : e.payload.doc.data()['nama']
        };
    });
    for (var  i = 0; i < this.data.length; i++) {
      
    }
  });;
    
  }

}