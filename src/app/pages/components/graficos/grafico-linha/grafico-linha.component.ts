import { ValorRecebido } from './../../../../shared/Entities/ValorRecebido';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NbColorHelper, NbGlobalLogicalPosition, NbThemeService, NbToastrService } from '@nebular/theme';
import { NegocioDataGraficoService } from '../../../../../services/GraficoController/negocio-data-grafico.service';

@Component({
  selector: 'ngx-grafico-linha',
  templateUrl: './grafico-linha.component.html',
  styleUrls: ['./grafico-linha.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GraficoLinhaComponent implements OnInit {
  data: any;
  options: any;
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private negocioService: NegocioDataGraficoService,
    private toastrService: NbToastrService) {
    this.carregarDados();
  }

   ngOnInit(): void {
     this.carregarDados();
   }

   carregarDados() {

    this.negocioService.GetDadosGraficoLinhaTempo().subscribe(
      sucesso => {
        let valorContaPaga: number[] = [];
        let valorRecebido: number[] = [];

        sucesso.data.contaPaga.forEach(element => {
          valorContaPaga.push(element.valor_pago);
        });

        sucesso.data.valorRecebido.forEach(element => {
          valorRecebido.push(element.valor_recebido);
        });


        this.data = {
          labels: ['10', '20', '50', '60', '70', '80', '90', '100' ],
          datasets: [{
            data: valorContaPaga,
            label: 'Contas Pagas',
            // backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            borderColor: '#FF6347'
            }, {
              data: valorRecebido,
              label: 'Valor Recebido',
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

      },
      erro => {
        this.toastrService.show('Erro ao carregar valor recebido', erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.BOTTOM_END
        })
      }
    );
   }
}
