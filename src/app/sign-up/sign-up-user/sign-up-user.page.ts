import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-user',
  templateUrl: './sign-up-user.page.html',
  styleUrls: ['./sign-up-user.page.scss'],
})
export class SignUpUserPage implements OnInit {

  @ViewChild('signupUserSlider', { static: false,}) signupUserSlider;

  formOne: FormGroup;
  formTwo: FormGroup;
  validationEmail = false;
  validationPassword = false;
  validationTypePassword = false;
  validationName = false;
  validationAge = false;
  validationOccupation = false;
  validationNoTelephone = false;
  
  

  constructor(private alertCtrl: AlertController, private router: Router) { }

  //  next(){
  //   this.signupUserSlider.slideNext();
  // }

  // prev(){
  //   this.signupUserSlider.slidePrev();
  // }

  ngOnInit() {
    this.formOne = new FormGroup({
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      reTypePassword: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
    });

    this.formTwo = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      age: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      occupation: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      notelephone: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)]
      })
    });

    this.formOne.controls.email.valueChanges.subscribe(() => {
      if (!this.formOne.controls.email.valid) {
        this.validationEmail = true;
      } else {
        this.validationEmail = false;
      }
    });
   
    this.formOne.controls.password.valueChanges.subscribe(() => {
      if (!this.formOne.controls.password.valid) {
        this.validationPassword = true;
      } else {
        this.validationPassword = false;
      }
    });

    this.formOne.controls.reTypePassword.valueChanges.subscribe(() => {
      if (!this.formOne.controls.reTypePassword.valid) {
        this.validationTypePassword = true;
      } else {
        this.validationTypePassword = false;
      }
    });

   this.formTwo.controls.name.valueChanges.subscribe(() => {
      if (!this.formTwo.controls.name.valid) {
        this.validationName = true;
      } else {
        this.validationName = false;
      }
    });
   
    this.formTwo.controls.age.valueChanges.subscribe(() => {
      if (!this.formTwo.controls.age.valid) {
        this.validationAge = true;
      } else {
        this.validationAge = false;
      }
    });

    this.formTwo.controls.occupation.valueChanges.subscribe(() => {
      if (!this.formTwo.controls.occupation.valid) {
        this.validationOccupation = true;
      } else {
        this.validationOccupation = false;
      }
    });

    this.formTwo.controls.notelephone.valueChanges.subscribe(() => {
      if (!this.formTwo.controls.notelephone.valid) {
        this.validationNoTelephone = true;
      } else {
        this.validationNoTelephone = false;
      }
    });

  }

  onSubmit() {
    // tslint:disable-next-line: max-line-length
    if (this.validationEmail !== true  && this.validationPassword !== true && this.validationTypePassword 
      !== true && this.validationName !== true && this.validationAge !== true && this.validationOccupation !== true 
      && this.validationNoTelephone !== true) {
      // tslint:disable-next-line: max-line-length
      if (this.formOne.value.email !== null && this.formOne.value.password !== null && this.formOne.value.reTypePassword !== null 
        && this.formTwo.value.name !== null && this.formTwo.value.age !== null 
        && this.formTwo.value.occupation !== null && this.formTwo.value.notelephone !== null) {
        this.router.navigate(['/login']);
      } else {
        if (this.formOne.value.email === null) {
          this.validationEmail = true;
        }
        if (this.formOne.value.password === null) {
          this.validationPassword = true;
        }
        if (this.formOne.value.reTypePassword === null) {
          this.validationTypePassword = true;
        }
        if(this.formTwo.value.name === null){
          this.validationName = true
        }
        if(this.formTwo.value.age === null){
          this.validationAge = true
        }
        if(this.formTwo.value.occupation === null){
          this.validationOccupation = true
        }
        if(this.formTwo.value.notelephone === null){
          this.validationNoTelephone = true
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
