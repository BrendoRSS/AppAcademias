import { Component, OnInit, Input } from '@angular/core';
import { ConectionApiNutriService } from 'src/app/services/conection-api-nutri.service';

@Component({
  selector: 'app-receitas-gerais',
  templateUrl: './receitas-gerais.component.html',
  styleUrls: ['./receitas-gerais.component.scss'],
})

export class ReceitasGeraisComponent implements OnInit {
 
  @Input() id: number = -1;
  @Input() title: string = ''; // Para o título do card
  @Input() img: string = '';  // Para imagem
  receitas: any[] = [];

  constructor(public GenerateNutri: ConectionApiNutriService) { }

  ngOnInit() {
    this.obterReceitas();
  }

  async obterReceitas(): Promise<void> {
    try {
        const data: any = await this.GenerateNutri.puxarDados(); // Aguarda a requisição

        console.log('Dados obtidos:', data); // Verifica o que foi obtido

        this.receitas = data.meals; // Atribui os resultados aos dados

        console.log('Receitas:', this.receitas); // Verifica as receitas atribuídas

    } catch (erro) {
        console.error('Erro ao obter receitas:', erro); // Lida com erros
    }
}
}