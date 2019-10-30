import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.page.html',
  styleUrls: ['./sign-up-user.page.scss'],
})
export class SignUpUserPage implements OnInit {
  form: FormGroup;
  validationUname: boolean;
  validationPassword: boolean;
  validationTypePassword: boolean;
  validationEmail: boolean;
  validationNoTelepon: boolean;

  constructor(private alertCtrl: AlertController) { }

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
  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    if (this.validationUname !== true && this.validationPassword !== true && this.validationTypePassword) {
      // this.offer = new Place(
      //   this.form.value.offerId,
      //   this.form.value.placeTitle,
      //   this.form.value.description,
      //   this.form.value.imgUrl,
      //   this.form.value.price
      // );
      // this.offerService.editOffer(this.offer, this.detailOffer.id);
      // this.router.navigate(['/places/tabs/offers']);
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
