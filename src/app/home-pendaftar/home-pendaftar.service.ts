import { Sekolah } from './../home-penyedia/sekolah.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
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

  readInfoPendaftar(UseriD: string): AngularFirestoreDocument<User>{
    console.log(UseriD);
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
