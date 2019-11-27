import { HomePendaftarService } from './../../../home-pendaftar.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-kegiatan',
  templateUrl: './request-kegiatan.page.html',
  styleUrls: ['./request-kegiatan.page.scss'],
})
export class RequestKegiatanPage implements OnInit {
  form: FormGroup;
  constructor(private navCtrl: NavController, private homePendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
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


    this.homePendaftarSvc.addRequest(data);

    // this.navCtrl.navigateBack('/home-pendaftar/home');
  }

  onCancel(){
    // this.navCtrl.navigateBack('/home-pendaftar/home');
  }


}
