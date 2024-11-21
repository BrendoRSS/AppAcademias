import { Injectable } from '@angular/core';
import dbConfig from "../firebaseAppConfig";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  
  constructor() {
    
  }
  async signUp(email: string, password: string) {
    const auth = getAuth(dbConfig); 
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
}
