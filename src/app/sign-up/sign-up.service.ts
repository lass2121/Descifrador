import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private firestore: AngularFirestore) { }

  readUsers(loginAs: string) {
    return this.firestore.collection(loginAs).snapshotChanges();
  }

  addUsers(data: any) {
    return this.firestore.collection('users').add(data);
  }

  addPenyedia(data: any) {
    return this.firestore.collection('penyedia').add(data);
  }

  registerUser(val: any) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(val.email, val.password)
        .then(
          ress => resolve(ress),
          err => reject(err)
        );
    });
  }

  loginUser(val: any){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(val.email, val.password)
        .then(
          ress => resolve(ress),
          err => reject(err)
        )
    })
  }
}
