import { Injectable } from '@angular/core';
import { Usuario } from './model/usuario';
@Injectable({
    providedIn: 'root'
  })
export class DataService {
    private usuario: Usuario;
    constructor() {
        this.usuario = new Usuario('', '');
       }
    
      setUsuario(usuario: Usuario) {
        this.usuario = usuario;
      }
    
      getUsuario(): Usuario {
        return this.usuario;
      }
    
      isValidLogin(email: string, senha: string): boolean {
        return email === 'admin' && senha === '123';
      }
}
