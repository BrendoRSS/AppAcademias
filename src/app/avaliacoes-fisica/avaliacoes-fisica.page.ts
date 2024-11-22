import { Component, OnInit } from '@angular/core';
import { PageGoBackService } from '../services/page-go-back.service';

@Component({
    selector: 'app-avaliacoes-fisica',
    templateUrl: './avaliacoes-fisica.page.html',
    styleUrls: ['./avaliacoes-fisica.page.scss'],
    standalone: false
})
export class AvaliacoesFisicaPage implements OnInit {

  constructor(private pageReturn:PageGoBackService) { }

  ngOnInit() {
  }
  goBackPage(){
    this.pageReturn.goBack();
  }
  formData = {
    name: 'Brendo Ricardo Souza da Silva',
    age: 24,
    gender: 'Masculino',
    height: 1.93,
    weight: 93,
    bodyFat: 10,
    waist: 60,
    hip: 60,
    chest: 30,
    observations: 'Sem observações',
  };

  submitForm() {
    console.log('Dados do formulário:', this.formData);
    // Aqui você pode enviar os dados para uma API ou salvar no banco de dados.
  }
}
