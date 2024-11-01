import { Injectable } from '@angular/core';
import { TradutorPtBRService } from './tradutor-pt-br.service';

@Injectable({
  providedIn: 'root'
})
export class ConectionApiNutriService {
  
  diet: string = "Vegetarian";
  apiKey: string = "1"; 

  constructor(private tradutorPtBr: TradutorPtBRService) { }

  async puxarDados() {
    const url: string = `https://www.themealdb.com/api/json/v1/${this.apiKey}/filter.php?c=${this.diet}`;
    
    try {
      // Definindo o tipo explicitamente
      const dadostraduzidos: { meals: { strMeal: string; strMealThumb: string; idMeal: string }[] } = { meals: [] };
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();

      // Itera sobre as refeições e traduz cada nome de refeição
      //está limitando a tradução
      /*
      for (const meal of data.meals) {
        const nomeTraduzido = await this.tradutorPtBr.traduzirJSON(meal.strMeal);
        dadostraduzidos.meals.push({
          strMeal: nomeTraduzido,
          strMealThumb: meal.strMealThumb,
          idMeal: meal.idMeal
        });
      }*/

      return data;  // Retorna os dados no formato desejado, com traduções
    } 
    catch (error) {
      console.error('Erro ao buscar receitas:', error);
      throw error;  // Re-lança o erro para tratamento posterior
    }
  }
  async puxarPorId(id:string){
    const url: string = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    const data = await response.json();
    return data
  }
}
