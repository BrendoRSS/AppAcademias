import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-treino',
  templateUrl: './card-treino.component.html',
  styleUrls: ['./card-treino.component.scss'],
})
export class CardTreinoComponent  implements OnInit {
  @Input() title: string = ''; // Para o título do card
  @Input() serie: string = ''; // Para o subtítulo do card
  @Input() img: string = '';  // Para imagem
  @Input() tag: string = '';  // Para tag

  constructor() { }

  ngOnInit() {}

}
