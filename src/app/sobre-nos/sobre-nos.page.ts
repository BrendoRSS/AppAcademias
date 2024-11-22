import { Component, OnInit } from '@angular/core';
import { PageGoBackService } from '../services/page-go-back.service';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.page.html',
  styleUrls: ['./sobre-nos.page.scss'],
})
export class SobreNosPage implements OnInit {

  constructor(private pageReturn:PageGoBackService) { }

  ngOnInit() {
  }
  goBackPage(){
    this.pageReturn.goBack();
  }
}
