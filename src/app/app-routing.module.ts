import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: '', pathMatch: 'full' },  { path: 'home-penyedia', loadChildren: './home-penyedia/home-penyedia.module#HomePenyediaPageModule' },
=======
  { path: '', redirectTo: '', pathMatch: 'full' },  { path: 'home-pendaftar', loadChildren: './home-pendaftar/home-pendaftar.module#HomePendaftarPageModule' },
>>>>>>> dd71a4dc9b28ebcdd2439f4d789f2ef867875861

  
  ];
  
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
