import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewSekolahPage } from './review-sekolah.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewSekolahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewSekolahPage]
})
export class ReviewSekolahPageModule {}
