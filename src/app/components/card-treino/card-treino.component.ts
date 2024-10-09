import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-treino',
  templateUrl: './card-treino.component.html',
  styleUrls: ['./card-treino.component.scss'],
})
export class CardTreinoComponent  implements OnInit {
  @Input() title: string = ''; // Para o título do card
  @Input() subtitle: string = ''; // Para o subtítulo do card
  @Input() img: string = '';  // Para o conteúdo do card

  constructor() { }

  ngOnInit() {}

}
