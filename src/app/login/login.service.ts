import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // login: Login
  
  uid:string;

  constructor() { }

  addUid(uid: string){
    // console.log(uid);

    // this.login.uid = uid; 
    this.uid = uid;
  }

  getUid(){
    // return this.login.uid;
    return this.uid;
  }

}
