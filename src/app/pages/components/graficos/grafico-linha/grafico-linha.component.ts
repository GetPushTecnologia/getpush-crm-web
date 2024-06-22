import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-grafico-linha',
  templateUrl: './grafico-linha.component.html',
  styleUrls: ['./grafico-linha.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraficoLinhaComponent implements OnInit {
  data: any;
  options: any;

  constructor() { 
    this.carregarDados();
  }

   ngOnInit(): void {
    //  this.carregarDados();
   }

   carregarDados() {

    this.data = {
      labels: ['10', '20', '50', '60', '70', '80', '90', '100' ],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'A Pagar',
        // backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: '#FF6347'
        }, {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'A Receber',
          // backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
          borderColor: '#3CB371'
        },     
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: true,
              // color: chartjs.axisLineColor,
            },
            ticks: {
              // fontColor: chartjs.textColor,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              // color: chartjs.axisLineColor,
            },
            ticks: {
              // fontColor: chartjs.textColor,
            },
          },
        ],
      },
      legend: {
        labels: {
          // fontColor: chartjs.textColor,
        },
      },
    };

   }
}
