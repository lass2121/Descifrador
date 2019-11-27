import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignUpPenyediaPage } from './sign-up-penyedia.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPenyediaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpPenyediaPage]
})
export class SignUpPenyediaPageModule {}
