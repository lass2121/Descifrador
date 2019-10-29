import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home-penyedia', loadChildren: './home-penyedia/home-penyedia.module#HomePenyediaPageModule' },
  { path: 'home-pendaftar', loadChildren: './home-pendaftar/home-pendaftar.module#HomePendaftarPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'status-penyedia', loadChildren: './status-penyedia/status-penyedia.module#StatusPenyediaPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'request', loadChildren: './home-penyedia/request/request.module#RequestPageModule' },
  { path: 'detail-request', loadChildren: './home-penyedia/detail-request/detail-request.module#DetailRequestPageModule' },


  
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
