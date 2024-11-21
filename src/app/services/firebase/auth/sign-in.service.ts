import { Injectable } from '@angular/core';
import firebaseAppConfig from "../firebaseAppConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  
  constructor() { }

  async signIn(email: string, password: string) {
    const auth = getAuth(firebaseAppConfig);
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
}
