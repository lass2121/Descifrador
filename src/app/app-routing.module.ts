import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home-penyedia', children: [
    {
      path: '',
      loadChildren: './home-penyedia/home-penyedia.module#HomePenyediaPageModule'
    },
    { 
      path: 'request',  children: [
      {
        path: '',
        loadChildren: './home-penyedia/request/request.module#RequestPageModule' 
      },
      { 
        path: ':requestId',
        loadChildren: './home-penyedia/detail-request/detail-request.module#DetailRequestPageModule' 
      },
      ]
    },
    { 
      path: 'history-request', children: [
      {
        path: '',
        loadChildren: './home-penyedia/history-request/history-request.module#HistoryRequestPageModule' 
      },
      { 
        path: ':requestId',
        loadChildren: './home-penyedia/history-request/history-request-detail/history-request-detail.module#HistoryRequestDetailPageModule' 
      },
      ]
    },
    {
      path: 'review', 
      loadChildren: './home-penyedia/review-sekolah/review-sekolah.module#ReviewSekolahPageModule' 
    },
    {
      path: 'profil', 
      loadChildren: './home-penyedia/profil/profil.module#ProfilPageModule' 
    },
    { 
      path: ':requestId', 
      loadChildren: './home-penyedia/detail-acc/detail-acc.module#DetailAccPageModule' 
    },
  ]},
  { path: 'home-pendaftar', loadChildren: './home-pendaftar/home-pendaftar.module#HomePendaftarPageModule' },
  {
    path: 'sign-up',
    children: [
      {
        path: '',
        loadChildren: './sign-up/sign-up.module#SignUpPageModule'
      },
      {
        path: 'sign-up-penyedia',
        loadChildren: './sign-up/sign-up-penyedia/sign-up-penyedia.module#SignUpPenyediaPageModule'
      },
      {
        path: 'sign-up-user',
        loadChildren: './sign-up/sign-up-user/sign-up-user.module#SignUpUserPageModule'
      }
    ]
  },

  // { path: 'home', loadChildren: './home-pendaftar/home/home.module#HomePageModule' },
  // { path: 'status', loadChildren: './home-pendaftar/status/status.module#StatusPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'review-sekolah', loadChildren: './home-penyedia/review-sekolah/review-sekolah.module#ReviewSekolahPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
