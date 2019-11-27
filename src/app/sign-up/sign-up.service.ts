import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private firestore: AngularFirestore) { }

  readUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  addUsers(data: any) {
    return this.firestore.collection('users').add(data);
  }
}
