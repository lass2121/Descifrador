import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePendaftarPage } from './home-pendaftar.page';

const routes: Routes = [
  {
    path: '',
    component: HomePendaftarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePendaftarPage]
})
export class HomePendaftarPageModule {}
