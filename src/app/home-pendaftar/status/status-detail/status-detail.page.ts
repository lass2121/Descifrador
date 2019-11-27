import { HomePendaftarService } from './../../home-pendaftar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.page.html',
  styleUrls: ['./status-detail.page.scss'],
})
export class StatusDetailPage implements OnInit {
  
  constructor(private homePendaftarSvc: HomePendaftarService) { }

  ngOnInit() {
  }

}
