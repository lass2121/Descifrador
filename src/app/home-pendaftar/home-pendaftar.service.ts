import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePendaftarService {
  request = new BehaviorSubject<Request[]>([]);

  name: string;
  email: string;
  occupation: string;
  age: number;
  telp: number;

  constructor(private firestore: AngularFirestore) { }

  addRequest(data: any) {
    return this.firestore.collection('request-kegiatan').add(data);
  }

  readRequest() {
    
  }


}
