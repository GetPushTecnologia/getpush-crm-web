import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NbGlobalLogicalPosition, NbThemeService, NbToastrService } from '@nebular/theme';
import { FluxoCaixaPainelComponent } from '../../../fluxo-caixa/fluxo-caixa-painel/fluxo-caixa-painel.component';
import { Subject } from 'rxjs';
import { NegocioDataGraficoService } from '../../../../../services/GraficoController/negocio-data-grafico.service';

@Component({
  selector: 'ngx-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.scss']
})
export class GraficoPizzaComponent implements OnInit  {
  @ViewChild(FluxoCaixaPainelComponent) fluxoCaixaComponent: FluxoCaixaPainelComponent;

  options: any = {};
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private theme: NbThemeService,
    private negocioService: NegocioDataGraficoService,
    private toastrService: NbToastrService) {
  }

  ngOnInit() {

    this.carregarDadosGraficos();
  }


  carregarDadosGraficos() {

    this.negocioService.GetDadosGraficoResumido().subscribe(
      sucesso => {
        // this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

        // const colors = config.variables;
        // const echarts: any = config.variables.echarts;

        this.options = {
          // backgroundColor: echarts.bg,
          // color: ['#FF6347', '#3CB371'],
          color: ['#dc3545','#007bff'],

          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Contas Pagas', 'Valor Recebido'],
            textStyle: {
              // color: echarts.textColor,
            },
          },
          series: [
            {
              name: 'Countries',
              type: 'pie',
              radius: '80%',
              center: ['50%', '50%'],
              data: [
                { value: sucesso.data.totalContaPaga, name: 'Contas Pagas' },
                { value: sucesso.data.totalValorRecebido, name: 'Valor Recebido' },

              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  // shadowColor: echarts.itemHoverShadowColor,
                },
              },
              label: {
                normal: {
                  textStyle: {
                    // color: echarts.textColor,
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    // color: echarts.axisLineColor,
                  },
                },
              },
            },
          ],
        };
        // });
      },
      erro => {
        this.toastrService.show('Erro ao carregar valor recebido', erro.error.Message, {
          status: 'danger',
          position: this.logicalPositions.BOTTOM_END
        })
      }
    )

  }

}
