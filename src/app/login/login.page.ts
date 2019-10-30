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

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {
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

    this.form.controls.username.valueChanges.subscribe(() => {
      if (!this.form.controls.username.valid) {
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
      if (this.form.value.username !== null && this.form.value.password !== null && this.form.value.loginAs !== null) {
        console.log(this.form.value.loginAs);
        if(this.form.value.loginAs === 'penyedia') {
          this.navCtrl.navigateForward(['/home-penyedia']);
        } else {
          this.navCtrl.navigateForward(['/home-pendaftar']);
        }
      } else {
        if(this.form.value.username == null) {
          this.validationUname = true;
        }
        if (this.form.value.username == null) {
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

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid',
      message: 'Please Complete The Form',
      buttons: ['OK']
    });

    await alert.present();
  }
}
