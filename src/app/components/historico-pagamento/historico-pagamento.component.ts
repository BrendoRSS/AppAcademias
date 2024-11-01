import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-pagamento',
  templateUrl: './historico-pagamento.component.html',
  styleUrls: ['./historico-pagamento.component.scss'],
})
export class HistoricoPagamentoComponent  implements OnInit {

  constructor() { }
  statusPagamento: string = "" ;
  mes: String = "";
  vencimento: number = 0;
  status: String = "";
  ngOnInit() {
    this.verificaData();
  }
  verificaData(){
    const Adata = new Date();
    const diaData = Adata.getDate();

    //Dia de Referência
    const diaReferenciamin = 5;
    const diaReferenciamax = 10;

    //definindo meses
    let mesEscrito = "";
    const mesReferencia = Adata.getMonth() - 1;
    if (mesReferencia == 1){
        mesEscrito = "JAN";
    }else if (mesReferencia == 2){
      mesEscrito = "FEV";
    }else if (mesReferencia == 3){
      mesEscrito = "MAR";
    }else if (mesReferencia == 4){
      mesEscrito = "ABR";
    }else if (mesReferencia == 5){
      mesEscrito = "MAI";
    }else if (mesReferencia == 6){
      mesEscrito = "JUN";
    }else if (mesReferencia == 7){
      mesEscrito = "JUL";
    }else if (mesReferencia == 8){
      mesEscrito = "AGO";
    }else if (mesReferencia == 9){
      mesEscrito = "SET";
    }else if (mesReferencia == 10){
      mesEscrito = "OUT";
    }else if (mesReferencia == 11){
      mesEscrito = "NOV";
    }else if (mesReferencia == 12){
      mesEscrito = "DEZ";
    }

    //Definindo data de vencimento
    const vencimento = Adata.getDate() + 7

    if (diaData >= diaReferenciamin || diaData <= diaReferenciamax) {
      this.mes = mesEscrito;
      this.vencimento = vencimento;
      this.status = "A Pagar"
    }
    else{
      this.mes = mesEscrito;
      this.vencimento = vencimento;
      this.status = "Vencido"
    }
  }
}
