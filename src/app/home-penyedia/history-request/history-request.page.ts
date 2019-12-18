import { Component, OnInit } from '@angular/core';
import { HomePenyediaService } from '../home-penyedia.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-history-request',
  templateUrl: './history-request.page.html',
  styleUrls: ['./history-request.page.scss'],
})
export class HistoryRequestPage implements OnInit {
  public data ;
  constructor(
    private homePenyediaSvc : HomePenyediaService,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.homePenyediaSvc.readHistoryRequest().snapshotChanges().subscribe(data => {
      this.data = data.map(e => {
        return{
          $key: e.payload.doc.id,
          $value : e.payload.doc.data(),
        };
      });
      console.log(this.data);
    });


   
   
  }
}
