import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePendaftarService {
  request = new BehaviorSubject<Request[]>([]);

  constructor(private firestore: AngularFirestore) { }

  addRequest(data: any) {
    return this.firestore.collection('request-kegiatan').add(data);
  }

  readRequest() {
    
  }


}
