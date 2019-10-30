import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-penyedia',
  templateUrl: './sign-up-penyedia.page.html',
  styleUrls: ['./sign-up-penyedia.page.scss'],
})
export class SignUpPenyediaPage implements OnInit {
  form: FormGroup;
  validationUname = false;
  validationPassword = false;
  validationTypePassword = false;
  validationEmail = false;
  validationNoTelepon = false;
  validationSekolah = false;
  validationJenjang = false;

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      reTypePassword: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      notelepon: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      sekolah: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      jenjang: new FormControl(null, {
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

    this.form.controls.reTypePassword.valueChanges.subscribe(() => {
      if (!this.form.controls.reTypePassword.valid) {
        this.validationTypePassword = true;
      } else {
        this.validationTypePassword = false;
      }
    });

    this.form.controls.email.valueChanges.subscribe(() => {
      if (!this.form.controls.email.valid) {
        this.validationEmail = true;
      } else {
        this.validationEmail = false;
      }
    });

    this.form.controls.notelepon.valueChanges.subscribe(() => {
      if (!this.form.controls.notelepon.valid) {
        this.validationNoTelepon = true;
      } else {
        this.validationNoTelepon = false;
      }
    });

    this.form.controls.sekolah.valueChanges.subscribe(() => {
      if (!this.form.controls.sekolah.valid) {
        this.validationSekolah = true;
      } else {
        this.validationSekolah = false;
      }
    });

    this.form.controls.jenjang.valueChanges.subscribe(() => {
      if (!this.form.controls.jenjang.valid) {
        this.validationJenjang = true;
      } else {
        this.validationJenjang = false;
      }
    });
  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    if (this.validationUname !== true && this.validationPassword !== true && this.validationTypePassword !== true && this.validationEmail !== true && this.validationNoTelepon !== true && this.validationSekolah !== true && this.validationJenjang !== true) {
      // tslint:disable-next-line: max-line-length
      if (this.form.value.username !== null && this.form.value.password !== null && this.form.value.reTypePassword !== null && this.form.value.email !== null && this.form.value.notelepon !== null && this.form.value.sekolah !== null && this.form.value.jenjang !== null) {
        this.router.navigate(['/login']);
      } else {
        if(this.form.value.username === null) {
          this.validationUname = true;
        }
        if (this.form.value.password === null) {
          this.validationPassword = true;
        }
        if (this.form.value.reTypePassword === null) {
          this.validationTypePassword = true;
        }
        if (this.form.value.email === null) {
          this.validationEmail = true;
        }
        if (this.form.value.notelepon === null) {
          this.validationNoTelepon = true;
        }
        if (this.form.value.sekolah === null) {
          this.validationSekolah = true;
        }
        if (this.form.value.jenjang === null) {
          this.validationJenjang = true;
        }
      }
    } else {
      this.presentAlert();
    }
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
