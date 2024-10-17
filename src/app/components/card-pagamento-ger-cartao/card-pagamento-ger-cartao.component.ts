import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pagamento-ger-cartao',
  templateUrl: './card-pagamento-ger-cartao.component.html',
  styleUrls: ['./card-pagamento-ger-cartao.component.scss'],
})
export class CardPagamentoGerCartaoComponent  implements OnInit {
  isModalOpen = false;
  cardName: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  cardBrand: string = '';
  
  constructor() { }

  ngOnInit() {}

  onSubmit() {
    // Lógica para processar o cadastro do cartão
    console.log('Nome no Cartão:', this.cardName);
    console.log('Número do Cartão:', this.cardNumber);
    console.log('Data de Validade:', this.expiryDate);
    console.log('CVV:', this.cvv);
    console.log('Bandeira do Cartão:', this.cardBrand);
    
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
