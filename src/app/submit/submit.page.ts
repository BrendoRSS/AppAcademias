import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { AngularFireDatabase } from '@angular/fire/compat/database'; 
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Users } from '../interfaces/users';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.page.html',
    styleUrls: ['./submit.page.scss'],
    
})
export class SubmitPage implements OnInit {
  userRegister: Users = {};
  private loading: any;
  constructor(private router: Router, private dataService: DataService, public db: AngularFireDatabase, 
    public formBuilder: FormBuilder, private alertcontroller: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private authService: AuthService
  ) {
    
 }

async presentLoading(){
  this.loading = await this.loadingCtrl.create({
    message: "Por favor Aguarde..."
  })
  this.loading.present()
}
async presentAlert(message: string){
  const alert = await this.alertcontroller.create({
    header: 'ERRO',
    message: message,
    buttons: ['OK'],
  })
  await alert.present()
}
async presentToast(message: string){
  const toast = await this.toastCtrl.create({
    message: ''
  })
  toast.present()
}
async presentAlertSP(){
  const alert = await this.alertcontroller.create({
    header: 'ERRO',
    message: "Senhas não Conferem. Tente novamente!",
    buttons: ['OK'],
  })
  await alert.present()
}

async cadastroUsuario(){
  this.presentLoading()
  try {
    await this.authService.register(this.userRegister)
    this.router.navigate(['login'])
  }
  catch (error) {
    console.error(error)
    if (error instanceof Error) {
      this.presentAlert(error.message);
    } else {
      console.error('Erro desconhecido:', error);
  }
    this.loading.dismiss()
  
  
  
  
    
  
  }
   
  
  
}


  ngOnInit() {
  }
}


