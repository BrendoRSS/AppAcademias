import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
    standalone: false
})
export class Tab3Page {
  selectedOption:string =""
  constructor() {

  }
  OnInit(){
    
  }
  onOptionChange(value:string){
    this.selectedOption = value
    console.log("Funcionou!")
    console.log("Clicou em: " , value)
  }


}
