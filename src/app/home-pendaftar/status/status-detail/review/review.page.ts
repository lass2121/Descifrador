import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomePendaftarService } from 'src/app/home-pendaftar/home-pendaftar.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  requestId: string;

  form: FormGroup;
  validationReview = false;

  constructor(
    private navCtrl: NavController, 
    private homePendaftarSvc: HomePendaftarService,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController, ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('requestId')){return;}
          this.requestId = paramMap.get('requestId')
      }
    );

    this.form = new FormGroup({
      review: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
    });

    this.form.controls.review.valueChanges.subscribe(() => {
      if (!this.form.controls.review.valid) {
        this.validationReview = true;
      } else {
        this.validationReview = false;
      }
    });
  }

  onSubmit(){
    if(!this.validationReview){
      if(this.form.value.review !== null){
        this.homePendaftarSvc.updateRequestReview(this.requestId, this.form.value.review);
        this.presentAlertSucccess();
        this.navCtrl.navigateBack('/home-pendaftar/tabs/status');

      }else{
        if(this.form.value.review === null){
          this.validationReview = true;
        }
      }
    }
    else{
      console.log('false');
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

  async presentAlertSucccess() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: 'Review has been submitted!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
