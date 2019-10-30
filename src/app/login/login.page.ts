import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  validationUname = false;
  validationPassword = false;
  validationLoginAs = false;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    
  }

  onLogin(){
    this.navCtrl.navigateBack('/home-penyedia');
  }
  onRegister(){
    this.navCtrl.navigateBack('/sign-up');
  }

  
}
