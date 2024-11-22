import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-status-pagamento',
    templateUrl: './status-pagamento.component.html',
    styleUrls: ['./status-pagamento.component.scss'],
    standalone: false
})
export class StatusPagamentoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
