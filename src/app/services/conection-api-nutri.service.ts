import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConectionApiNutriService {
  
  diet: string = "Vegetarian"
  apiKey: string = "1"; 

  constructor() { }

  async puxarDados() {
    const url: string = `https://www.themealdb.com/api/json/v1/${this.apiKey}/filter.php?c=${this.diet}`;
    console.log(url);

    try {
        const response = await fetch(url);
        console.log("Resnpose: ", response)
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();

        //const dataportuguese = data.traduzed()

        return data;  // Retorna os dados obtidos da API
    } 
    catch (error) {
        console.error('Erro ao buscar receitas:', error);
        throw error;  // Re-lança o erro para tratamento posterior
    }
}
}

