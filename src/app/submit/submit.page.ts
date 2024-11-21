import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
 email:String = "";
 senha:String = "";
 nome:String = "";
 Cel:String = "";
 
 usuarioForm: FormGroup;

 constructor(private router: Router, private dataService: DataService, public db: AngularFireDatabase, public formBuilder: FormBuilder) {
    this.usuarioForm = this.formBuilder.group({nome: [null], Cel: [null], email: [null], senha: [null]}) 
 }

 enviarcadastro(){
  this.router.navigate([''])
 }

cadastroUsuario(){
  this.db.database.ref('/usuarios').push(this.usuarioForm.value)
  .then(()=> {
    console.log('Salvo com Sucesso');
  })
  
  
}
 

  ngOnInit() {
  }

}
