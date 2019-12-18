import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomePenyediaService } from '../home-penyedia.service';

@Component({
  selector: 'app-review-sekolah',
  templateUrl: './review-sekolah.page.html',
  styleUrls: ['./review-sekolah.page.scss'],
})
export class ReviewSekolahPage implements OnInit {
  review: any;

  constructor(
    private homePenyediaSvc: HomePenyediaService
  ) { }

  ngOnInit() {
    this.homePenyediaSvc.readReviews().valueChanges().subscribe(listReview =>  {
      this.review = listReview;
    });
  }

}
