import { Component, OnInit } from '@angular/core';
import { HomePendaftarService } from 'src/app/home-pendaftar/home-pendaftar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-sekolah',
  templateUrl: './review-sekolah.page.html',
  styleUrls: ['./review-sekolah.page.scss'],
})
export class ReviewSekolahPage implements OnInit {
  public Review;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pendaftarSvc: HomePendaftarService,

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('schoolId')){return;}
        this.pendaftarSvc.readReviews(paramMap.get('schoolId')).valueChanges()
        .subscribe(listReview =>  {
          this.Review = listReview;
          
        });
      }
    );
    
  }

}
