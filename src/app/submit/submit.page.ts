import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { AngularFireDatabase } from '@angular/fire/compat/database'; 

@Component({
    selector: 'app-submit',
    templateUrl: './submit.page.html',
    styleUrls: ['./submit.page.scss'],
    
})
export class SubmitPage implements OnInit {
  
  usuarioForm: FormGroup

  constructor(private router: Router, private dataService: DataService, public db: AngularFireDatabase, public formBuilder: FormBuilder) {
    this.usuarioForm = this.formBuilder.group({nome: [null], cpf: [null], dtnascimento: [null], Cel: [null], email: [null], senha: [null]}) 
 }


cadastroUsuario(){
  this.db.database.ref('/usuarios').push(this.usuarioForm.value)
  .then(()=> {
    console.log('Salvo com Sucesso');
   this.router.navigate(['login'])
  })
  .catch(()=>{
    console.error("Erro ao efetuar o salvamento")
  })
  
  
}
 

  ngOnInit() {
  }

}
