import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradutorPtBRService {

  constructor() { 
    
  }

  async traduzirJSON(value:string){
    try{
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(value)}&langpair=en|pt-br`);
      const resultado = await res.json()

      //console.log("Resultado da tradução:", resultado.responseData.translatedText);
      return resultado.responseData.translatedText;
    } catch(erro){
      console.log('Erro ao acessar API', erro);
    }
  }



}
