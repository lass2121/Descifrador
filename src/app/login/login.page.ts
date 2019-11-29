import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
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
  isLoading = false;
  flag = false;

  // tslint:disable-next-line: max-line-length
  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private signUpSrvc: SignUpService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
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
        this.presentLoading();
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

  loginUser() {
    return this.signUpSrvc.loginUser(this.form.value)
    .then(res => {
        this.signUpSrvc.readUsers(this.form.value.loginAs).subscribe(data => {

        this.users = data.map(e => {
          return {
            uid : e.payload.doc.data()['userID']
          };
        });

        for (var  i = 0; i < this.users.length; i++) {
          console.log(res.user.uid);
          console.log(this.users[i].uid);
          if(res.user.uid === this.users[i].uid) {
            if(this.form.value.loginAs === 'users'){
              this.dismiss();
              this.flag = true;
              this.navCtrl.navigateForward('/home-pendaftar');
            } else {
              this.dismiss();
              this.flag = true;
              this.navCtrl.navigateForward('/home-penyedia');
            }
            break;
          }
        }
        if(!this.flag) {
          this.dismiss();
          this.presentAlertError();
        }
        });
    }, err => {
      this.dismiss();
      this.presentAlertError1();
    });
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: 'Please Wait . . .'
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid',
      message: 'Please Complete The Form',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid',
      message: 'Invalid Login',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertError1() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid',
      message: 'Invalid Username/Password',
      buttons: ['OK']
    });

    await alert.present();
  }
}
