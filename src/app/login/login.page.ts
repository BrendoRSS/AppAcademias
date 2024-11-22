import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';
import { Usuario } from '../model/usuario';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Users } from 'src/app/interfaces/users'
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: false
})
export class LoginPage  {
  userLogin: Users = {};
  loading: any;


  constructor(private router: Router, private dataService: DataService, public db: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    private authService: AuthService,
     public formBuilder: FormBuilder, private alertcontroller: AlertController) {
     
   }
   async presentAlert(message: string){
    const alert = await this.alertcontroller.create({
      header: 'Login Incorreto',
      message: 'Login ou Senha incorretos. Tente novamente!',
      buttons: ['OK'],
    })
    await alert.present()
  }
  async presentLoading(){
    this.loading = await this.loadingCtrl.create({
      message: "Aguarde..."
    })
    this.loading.present()
  }
  
  
  
  async enviar(){
    this.presentLoading()
    try {
      await this.authService.login(this.userLogin)
      this.router.navigate(['tabs/tab1'])
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        this.presentAlert(error.message);
      } else {
        console.error('Erro desconhecido:', error);
    } 
  }finally{
    this.loading.dismiss()
  }
  }
  cadastrar(){
    this.router.navigate(['submit'])
  }
  

}

