import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-alimentacao-dia',
    templateUrl: './card-alimentacao-dia.component.html',
    styleUrls: ['./card-alimentacao-dia.component.scss'],
    standalone: false
})
export class CardAlimentacaoDiaComponent  implements OnInit {
  @Input() alimentacao: string = ''; // Para o tipo de alimentação
  @Input() nameicon: string = ''; // Para alterar os ícones
  constructor() { }

  ngOnInit() {}

}
