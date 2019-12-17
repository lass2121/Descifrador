import { HomePendaftarService } from './../../../home-pendaftar.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-request-kegiatan',
  templateUrl: './request-kegiatan.page.html',
  styleUrls: ['./request-kegiatan.page.scss'],
})
export class RequestKegiatanPage implements OnInit {
  form: FormGroup;
  schoolId:string;

  validationNama = false;
  validationTujuan = false;
  validationJumlah = false;
  validationDate = false;
  validationStartTime = false;
  validationEndTime = false;
  validationDesc = false;

  constructor(
    private navCtrl: NavController, 
    private activatedRoute: ActivatedRoute, 
    private homePendaftarSvc: HomePendaftarService,
    private loginSvc: LoginService,
    private alertCtrl: AlertController,
    ) { }
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('schoolId')){return;}
          this.schoolId = paramMap.get('schoolId')
      }
    );

    this.form = new FormGroup({
      nama: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      tujuan: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      jumlah: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      date: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      start_time: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      end_time: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      desc: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(1)]
      }),
      
    });

    this.form.controls.nama.valueChanges.subscribe(() => {
      if (!this.form.controls.nama.valid) {
        this.validationNama = true;
      } else {
        this.validationNama = false;
      }
    });

    this.form.controls.tujuan.valueChanges.subscribe(() => {
      if (!this.form.controls.tujuan.valid) {
        this.validationTujuan = true;
      } else {
        this.validationTujuan = false;
      }
    });

    this.form.controls.jumlah.valueChanges.subscribe(() => {
      if (!this.form.controls.jumlah.valid) {
        this.validationJumlah = true;
      } else {
        this.validationJumlah = false;
      }
    });

    this.form.controls.date.valueChanges.subscribe(() => {
      if (!this.form.controls.date.valid) {
        this.validationDate = true;
      } else {
        this.validationDate = false;
      }
    });

    this.form.controls.start_time.valueChanges.subscribe(() => {
      if (!this.form.controls.start_time.valid) {
        this.validationStartTime = true;
      } else {
        this.validationStartTime = false;
      }
    });

    this.form.controls.end_time.valueChanges.subscribe(() => {
      if (!this.form.controls.end_time.valid) {
        this.validationEndTime = true;
      } else {
        this.validationEndTime = false;
      }
    });

    this.form.controls.desc.valueChanges.subscribe(() => {
      if (!this.form.controls.desc.valid) {
        this.validationDesc = true;
      } else {
        this.validationDesc = false;
      }
    });

  }
  
  onSubmit(){
  
    if(!this.validationNama && !this.validationTujuan && !this.validationJumlah && !this.validationDate && !this.validationStartTime && !this.validationEndTime && !this.validationDesc){
      if(this.form.value.nama !== null && this.form.value.tujuan !== null && this.form.value.jumlah !== null && this.form.value.date !== null && this.form.value.start_time !== null && this.form.value.end_time !== null && this.form.value.desc !== null){
        console.log(this.form.value);
        let start_time =  this.form.value.start_time;
        start_time = start_time.substring(11,16);
        let end_time =  this.form.value.end_time;
        end_time = end_time.substring(11,16);
        let date = this.form.value.date
        date = date.substring(0,10);

        const data = {};
        data['nama'] = this.form.value.nama;
        data['tujuan'] = this.form.value.tujuan;
        data['jumlah'] = this.form.value.jumlah;
        data['desc'] = this.form.value.desc;
        data['date'] = date;
        data['start_time'] = start_time;
        data['end_time'] = end_time;
        data['status'] = 'Waiting Approval';
        data['schoolID'] = this.schoolId;
        data['requesterID'] = this.loginSvc.getUid();
        data['feedback'] = '';
        data['review'] = '';

        this.homePendaftarSvc.addRequest(data);
        this.presentAlertSucccess();
        this.navCtrl.navigateBack('/home-pendaftar/tabs/status');
      }
      else{
        if(this.form.value.nama === null){
          this.validationNama = true;
        }
        if(this.form.value.tujuan === null){
          this.validationTujuan = true;
        }
        if(this.form.value.jumlah === null){
          this.validationJumlah = true;
        }
        if(this.form.value.date === null){
          this.validationDate = true;
        }
        if(this.form.value.start_time === null){
          this.validationStartTime = true;
        }
        if(this.form.value.end_time === null){
          this.validationEndTime = true;
        }
        if(this.form.value.desc === null){
          this.validationDesc = true;
        }
      }
    }
    else{
      console.log('false');
      this.presentAlert();
    }
    
  }

  onCancel(){
    this.navCtrl.navigateBack('/home-pendaftar/tabs/home/' + this.schoolId);
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
      message: 'Request has been submitted!',
      buttons: ['OK']
    });

    await alert.present();
  }


}
