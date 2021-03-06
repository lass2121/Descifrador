import { HomePendaftarPage } from './home-pendaftar.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tabs',
        component: HomePendaftarPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './home/home.module#HomePageModule'
                    },
                    {
                        path: ':schoolId',
                        loadChildren: './home/home-detail/home-detail.module#HomeDetailPageModule'
                    },
                    {
                        path: 'request-kegiatan/:schoolId',
                        loadChildren: './home/home-detail/request-kegiatan/request-kegiatan.module#RequestKegiatanPageModule'
                    },
                    {
                        path: 'review-sekolah/:schoolId',
                        loadChildren: './home/home-detail/review-sekolah/review-sekolah.module#ReviewSekolahPageModule'
                    },

                ]
            },
            {
                path: 'status',
                children: [ // the order matters, hardcoded path must go before the dynamic path or else
                    {
                        path: '',
                        loadChildren: './status/status.module#StatusPageModule'
                    },
                    {
                        path: ':requestId',
                        loadChildren: './status/status-detail/status-detail.module#StatusDetailPageModule',
                    },
                    {
                        path: 'review/:requestId',
                        loadChildren: './status/status-detail/review/review.module#ReviewPageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/home-pendaftar/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home-pendaftar/tabs/home',
        pathMatch: 'full'
    },
  { path: 'info-pendaftar', loadChildren: './info-pendaftar/info-pendaftar.module#InfoPendaftarPageModule' },
  { path: 'request-kegiatan', loadChildren: './home/home-detail/request-kegiatan/request-kegiatan.module#RequestKegiatanPageModule' },
  { path: 'review', loadChildren: './status/status-detail/review/review.module#ReviewPageModule' },
  { path: 'review-sekolah', loadChildren: './home/home-detail/review-sekolah/review-sekolah.module#ReviewSekolahPageModule' },



  

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class HomePendaftarRoutingModule {}