import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  email:string =''
  senha:string = ''

  constructor(private router: Router, private dataService: DataService) {
     
   }
   enviar() {
      this.router.navigate(['tabs']);
  }
  cadastrar(){
    this.router.navigate(['submit'])
  }
  

}
