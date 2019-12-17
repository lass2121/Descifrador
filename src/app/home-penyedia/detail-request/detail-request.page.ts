import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HomePendaftarService } from 'src/app/home-pendaftar/home-pendaftar.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Request } from 'src/app/home-pendaftar/request.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HomePenyediaService } from '../home-penyedia.service';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.page.html',
  styleUrls: ['./detail-request.page.scss'],
})
export class DetailRequestPage implements OnInit {
  public request : Observable<Request>;

  form: FormGroup;
  key: any;
  val: any;

  validationComment = false;

  constructor(private navCtrl: NavController,
    private homePenyediaSvc : HomePenyediaService,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController)
  { }

  ngOnInit() {

    this.form = new FormGroup({
     
      comment: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(3)]
      }),
    });

    this.form.controls.comment.valueChanges.subscribe(() => {
      if (!this.form.controls.comment.valid) {
        this.validationComment = true;
      } else {
        this.validationComment = false;
      }
    });
    
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('requestId')){return;}
          this.request = this.homePenyediaSvc.readDetailRequest(paramMap.get('requestId')).valueChanges();
          this.key = ((paramMap.get('requestId')));
          console.log(this.request);
      }
    );
  }

  goBack() {
    this.navCtrl.navigateBack('/home-penyedia/request');
  }

  reject() {
    if (this.validationComment !== true){
      if (this.form.value.comment !== null){
       
       
        const data = {};
        data['feedback'] = this.form.value.comment;
        data['status'] = 'Rejected';
        this.presentAlertReject(data);
        
      }
      else {
        if (this.form.value.comment === null) {
          this.validationComment = true;
        }
    }
    
  }
  else {
    this.presentAlert();
  }
}
  async presentAlertReject(data) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Reject Request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            
            this.rejected(data);
            
          }
        }
      ]
    });

    await alert.present();
  }

  approve(){
    if (this.validationComment !== true){
      if (this.form.value.comment !== null){
       
       
        const data = {};
        data['feedback'] = this.form.value.comment;
        data['status'] = 'Approved';
        this.presentAlertApprove(data);
        
      }
      else {
        if (this.form.value.comment === null) {
          this.validationComment = true;
        }
    }
    
  }
  else {
    this.presentAlert();
  }
  }

  async presentAlertApprove(data) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Approve Request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.approved(data);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid',
      message: 'Please Complete The Comment Section',
      buttons: ['OK']
    });

    await alert.present();
  }

  rejected(data){
   
    this.homePenyediaSvc.statusRequest(data,this.key);
    this.presentAlertSucccess();
    this.navCtrl.navigateBack('/home-penyedia');

  }

  approved(data) {
    this.homePenyediaSvc.statusRequest(data,this.key);
    this.presentAlertSucccess();
    this.navCtrl.navigateBack('/home-penyedia');
  }

  async presentAlertSucccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Thank you for your response',
      buttons: ['OK']
    });

    await alert.present();
  }


}
