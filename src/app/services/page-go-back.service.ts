import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PageGoBackService {

  constructor(private navCtrl: NavController) { }
  goBack(){
    this.navCtrl.back();
  }
}
