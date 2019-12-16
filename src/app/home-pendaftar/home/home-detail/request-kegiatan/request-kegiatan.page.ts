import { HomePendaftarService } from './../../../home-pendaftar.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

    this.homePendaftarSvc.addRequest(data);

    // this.navCtrl.navigateBack('/home-pendaftar/home');
  }

  onCancel(){
    // this.navCtrl.navigateBack('/home-pendaftar/home');
  }


}
