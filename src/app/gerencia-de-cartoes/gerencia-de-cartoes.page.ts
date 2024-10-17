import { Component} from '@angular/core';
import { PageGoBackService } from '../services/page-go-back.service';

@Component({
  selector: 'app-gerencia-de-cartoes',
  templateUrl: './gerencia-de-cartoes.page.html',
  styleUrls: ['./gerencia-de-cartoes.page.scss'],
})
export class GerenciaDeCartoesPage {
  constructor(private pageReturn:PageGoBackService) { 

  }

  goBackPage(){
    this.pageReturn.goBack();
  }

}
