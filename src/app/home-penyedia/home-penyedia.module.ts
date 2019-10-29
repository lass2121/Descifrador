import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePenyediaPage } from './home-penyedia.page';

const routes: Routes = [
  {
    path: '',
    component: HomePenyediaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePenyediaPage]
})
export class HomePenyediaPageModule {}
