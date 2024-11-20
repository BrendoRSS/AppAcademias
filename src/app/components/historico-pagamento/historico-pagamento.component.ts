import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico-pagamento',
  templateUrl: './historico-pagamento.component.html',
  styleUrls: ['./historico-pagamento.component.scss'],
})
export class HistoricoPagamentoComponent implements OnInit {
  historico: boolean = true

  constructor() { }

  statusPagamento: string = "";
  dataPagamento: string =""
  mes: string = "";
  diaVencimento: number = 0;
  status: string = "A Pagar";

  ngOnInit() {
    this.verificaData();
  }

  verificaData() {

    // Pega a data atual
    const Adata = new Date();
    // Pega o dia da data atual
    const diaData = Adata.getDate();
    //Pega o mês da data atual
    const mesData = Adata.getMonth() + 1;
    this.dataPagamento = `${diaData}/${mesData}` 

    //definindo meses
    let mesEscrito = "";

    //Definindo data de vencimento
    const diaVencimento = 20

    if (diaData <= diaVencimento ) {
      this.diaVencimento = diaVencimento;
      this.status = "A Pagar"
    }

    switch (mesData) {
      case 1:
        this.mes = "JAN";
        return
      case 2:
        this.mes = "FEV";
        return;
      case 3:
        this.mes = "MAR";
        return
      case 4:
        this.mes = "ABR"
        return
      case 5:
        this.mes = "MAI"
        return 
      case 6:
        this.mes = "JUN"
        return
      case 7:
        this.mes = "JUl"
        return 
      case 8:
        this.mes = "AGO"
        return 
      case 9:
        this.mes = "SET"
        return
      case 10:
        this.mes = "OUT"
        return
      case 11:
        this.mes = "NOV"
        return
      case 12:
        this.mes = "DEZ"
        return
      default:
        return;
    }

  }
}
