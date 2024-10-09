import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { MenuController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { card, person, exit } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild('lineChart', { static: false }) lineChart!: ElementRef;

  line: any;

  constructor(private menuCtrl: MenuController) {
    addIcons({ card, person, exit });
  }

  ionViewDidEnter() {
    this.createLineChart();
  }

  createLineChart() {
    this.line = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
        datasets: [
          {
            label: 'Treino (min) / Mês',
            data: [1000, 3000, 2000, 5000, 4000, 7000, 8000], // Dados de exemplo
            fill: false,
            borderColor: '#d90b0b',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  openFirstMenu(){
  this.menuCtrl.open('first-menu')
  }
}