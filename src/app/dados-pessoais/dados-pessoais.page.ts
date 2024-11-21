import { Component, OnInit } from '@angular/core';
import { PageGoBackService } from '../services/page-go-back.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dados-pessoais',
    templateUrl: './dados-pessoais.page.html',
    styleUrls: ['./dados-pessoais.page.scss'],
    standalone: false
})
export class DadosPessoaisPage implements OnInit {
  dadosPessoaisForm!: FormGroup;

  constructor(public pageReturn: PageGoBackService,private formBuilder: FormBuilder) { }
    
  ngOnInit() {
    this.dadosPessoaisForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      altura: ['', [Validators.required, Validators.min(0)]],
      dataNascimento: ['', Validators.required],
      peso: ['', [Validators.required, Validators.min(0)]]
    });
  }
  
  onSubmit() {
    if (this.dadosPessoaisForm.valid) {
      console.log(this.dadosPessoaisForm.value);
      // Aqui você pode processar os dados do formulário (enviar para uma API, etc.)
    } else {
      console.log('Formulário inválido');
    }
  }


  goBackPage(){
    this.pageReturn.goBack();
  }

}
