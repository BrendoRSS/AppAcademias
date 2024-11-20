import { Component, OnInit, Input } from '@angular/core';
import { ConectionApiNutriService } from 'src/app/services/conection-api-nutri.service';

@Component({
  selector: 'app-receitas-gerais',
  templateUrl: './receitas-gerais.component.html',
  styleUrls: ['./receitas-gerais.component.scss'],
})

export class ReceitasGeraisComponent implements OnInit {

  @Input() id: number = -1;
  @Input() title: string = '';
  @Input() img: string = '';
  receitas: any[] = [];

  isModalOpen = false; // Controla a visibilidade do modal
  selectedReceita: any = null; // Armazena a receita selecionada para o modal

  constructor(public GenerateNutri: ConectionApiNutriService) {}

  ngOnInit() {
    this.obterReceitas();
  }

  async obterReceitas(): Promise<void> {
    try {
      const data: any = await this.GenerateNutri.puxarDados();
      this.receitas = data.meals;
    } catch (erro) {
      console.error('Erro ao obter receitas:', erro);
    }
  }

  async info(id: string) {
    try {
      const res = await this.GenerateNutri.puxarPorId(id);
      this.selectedReceita = res.meals[0]; // Atribui o primeiro objeto do array
      console.log('Detalhes da receita:', this.selectedReceita);
    } catch (error) {
      console.error("Erro ao buscar a receita:", error);
    }
  }

  openModal(idReceita: any) {
    this.isModalOpen = true;
    this.info(idReceita); // Busca dados da receita ao abrir o modal
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedReceita = null;
  }

  getIngredientes(receita: any): string[] {
    const ingredientes: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingrediente = receita[`strIngredient${i}`];
      const medida = receita[`strMeasure${i}`];
      if (ingrediente) {
        ingredientes.push(`${ingrediente} - ${medida || ''}`);
      }
    }
    return ingredientes;
  }
}
