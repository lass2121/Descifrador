import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'sign-up-penyedia', loadChildren: './sign-up/sign-up-penyedia/sign-up-penyedia.module#SignUpPenyediaPageModule' },
  { path: 'sign-up-user', loadChildren: './sign-up/sign-up-user/sign-up-user.module#SignUpUserPageModule' },


  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
