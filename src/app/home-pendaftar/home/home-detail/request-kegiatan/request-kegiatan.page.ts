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
  constructor(private navCtrl: NavController) { }

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
    let start_time =  this.form.value.start_time
    start_time = start_time.substring(11,16);
    let end_time =  this.form.value.end_time
    end_time = end_time.substring(11,16);

    // this.navCtrl.navigateBack('/home-pendaftar/home');
  }

  onCancel(){
    // this.navCtrl.navigateBack('/home-pendaftar/home');
  }


}
