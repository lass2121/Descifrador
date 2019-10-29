import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home-penyedia', pathMatch: 'full' },
  { path: 'home-penyedia', loadChildren: './home-penyedia/home-penyedia.module#HomePenyediaPageModule' },
  { path: 'home-pendaftar', loadChildren: './home-pendaftar/home-pendaftar.module#HomePendaftarPageModule' },

  
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
