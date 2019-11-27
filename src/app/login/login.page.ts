import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { SignUpService } from '../sign-up/sign-up.service';

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
  users: any;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private signUpSrvc: SignUpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      loginAs: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      })
    });

    this.form.controls.email.valueChanges.subscribe(() => {
      if (!this.form.controls.email.valid) {
        this.validationUname = true;
      } else {
        this.validationUname = false;
      }
    });

    this.form.controls.password.valueChanges.subscribe(() => {
      if (!this.form.controls.password.valid) {
        this.validationPassword = true;
      } else {
        this.validationPassword = false;
      }
    });

    this.form.controls.loginAs.valueChanges.subscribe(() => {
      if (!this.form.controls.loginAs.valid) {
        this.validationLoginAs = true;
      } else {
        this.validationLoginAs = false;
      }
    });
  }

  onLogin(){
    if (this.validationUname !== true && this.validationPassword !== true && this.validationLoginAs !== true) {
      // tslint:disable-next-line: max-line-length
      if (this.form.value.email !== null && this.form.value.password !== null && this.form.value.loginAs !== null) {
        // console.log(this.form.value.loginAs);
        // console.log('here');
        

        // if(this.form.value.email === 'this.users[0].name') {
        //   this.navCtrl.navigateForward(['/home-pendaftar']);
        // } else {
        //   this.navCtrl.navigateForward(['/home-pendaftar']);
        // }
        this.loginUser();
      } else {
        if(this.form.value.email == null) {
          this.validationUname = true;
        }
        if (this.form.value.email == null) {
          this.validationPassword = true;
        }
        if (this.form.value.loginAs == null) {
          this.validationLoginAs = true;
        }
      }
    } else {
      this.presentAlert();
    }
  }
  onRegister(){
    this.navCtrl.navigateBack('/sign-up');
  }

  loginUser(){
    this.signUpSrvc.loginUser(this.form.value)
    .then(res => {
        this.signUpSrvc.readUsers(this.form.value.loginAs).subscribe(data => {

        this.users = data.map(e => {
          return {
            uid : e.payload.doc.data()['userID']
          };
        });

        for(var i=0; i<this.users.length; i++){
          console.log(res.user.uid);
          console.log(this.users[i].uid);
          if(res.user.uid === this.users[i].uid){
            if(this.form.value.loginAs === 'users'){
              this.navCtrl.navigateForward('/home-pendaftar');
            }
            else {
              this.navCtrl.navigateForward('/home-penyedia');
            }
            break;
          }
        }



        // console.log(this.users.length);

        });
      // 
    }, err => {
    })
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid',
      message: 'Please Complete The Form',
      buttons: ['OK']
    });

    await alert.present();
  }
}
