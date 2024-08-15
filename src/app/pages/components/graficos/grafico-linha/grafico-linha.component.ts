import { ValorRecebido } from './../../../../shared/Entities/ValorRecebido';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NbColorHelper, NbGlobalLogicalPosition, NbThemeService, NbToastrService } from '@nebular/theme';
import { NegocioDataGraficoService } from '../../../../../services/GraficoController/negocio-data-grafico.service';
import Utils from '../../../../shared/Utils';
import { DatePipe } from '@angular/common';
import { CurrencyFormatPipeComponent } from '../../custom/custom-pipes/currency-format-pipe.component';

@Component({
  selector: 'ngx-grafico-linha',
  templateUrl: './grafico-linha.component.html',
  styleUrls: ['./grafico-linha.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CurrencyFormatPipeComponent]
})
export class GraficoLinhaComponent implements OnInit {
  data: any;
  options: any;
  logicalPositions = NbGlobalLogicalPosition;

  private utils: Utils;

  constructor(private negocioService: NegocioDataGraficoService,
    private toastrService: NbToastrService,
    private currencyPipe: CurrencyFormatPipeComponent,
    private datePipe: DatePipe) {
    this.carregarDados();
    this.utils = new Utils(this.currencyPipe, this.datePipe);
  }

   ngOnInit(): void {
     this.carregarDados();
   }

   carregarDados() {

    this.negocioService.GetDadosGraficoLinhaTempo().subscribe(
      sucesso => {
        let data: string[] = [];
        let contaPagaDia: number[] = [];
        let valorRecebido: number[] = [];

        sucesso.data.linhaTempoContaPaga.forEach(element => {
          data.push(this.utils.transformDate(element.dataPagamento, 'dd/MM/yyyy'));
          contaPagaDia.push(element.totalContaPaga);
        });

        sucesso.data.linhaTempoValorRecebido.forEach(element => {
          data.push(this.utils.transformDate(element.dataRecebimento, 'dd/MM/yyyy'));
          valorRecebido.push(element.totalValorRecebido);
        });

        this.data = {
          labels: data,
          datasets: [{
            data: contaPagaDia,
            label: 'Contas Pagas',
            // backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
            backgroundColor: 'rgba(255, 0, 0, 0.1)',
            borderColor: '#FF6347'
            },
            {
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
