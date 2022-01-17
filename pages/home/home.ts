import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController, private http: HttpClient) {}

  missingImage(missingImgUrl) {
    console.log(missingImgUrl);
  }

  loadData(event = null) {
    this.http
      .get<{ data: any[] }>(
        `https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8`
      )
      .subscribe((resp: { data: any }) => {
        this.data = JSON.parse(resp.data);
      });
  }

  data: any[] = [];

  ionViewWillEnter() {
    this.data = [];
    this.loadData();
  }
}
