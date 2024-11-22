import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ath: AngularFireAuth) { }

  login(user: Users){
    if (user.email && user.senha){
      return this.ath.signInWithEmailAndPassword(user.email, user.senha)
    }else{
      console.log("Error")
      return null;
    }
    
  }
  register(user: Users){
    if (user.email && user.senha){
      return this.ath.createUserWithEmailAndPassword(user.email, user.senha)
    }else{
      console.log("Error")
      return null;
    }
    
  }
  logout(){

  }
}
