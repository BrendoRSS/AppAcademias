import { Component, OnInit } from '@angular/core';
import { PageGoBackService } from '../services/page-go-back.service';

@Component({
  selector: 'app-avaliacoes-fisica',
  templateUrl: './avaliacoes-fisica.page.html',
  styleUrls: ['./avaliacoes-fisica.page.scss'],
})
export class AvaliacoesFisicaPage implements OnInit {

  constructor(private pageReturn:PageGoBackService) { }

  ngOnInit() {
  }
  goBackPage(){
    this.pageReturn.goBack();
  }
}
