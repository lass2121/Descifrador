import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoPendaftarPage } from './info-pendaftar.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPendaftarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoPendaftarPage]
})
export class InfoPendaftarPageModule {}
