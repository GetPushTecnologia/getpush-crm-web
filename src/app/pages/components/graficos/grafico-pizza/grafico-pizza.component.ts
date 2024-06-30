import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.scss']
})
export class GraficoPizzaComponent implements AfterViewInit {
  options: any = {};

  constructor(private theme: NbThemeService) {
  }
  
  ngAfterViewInit() {
    // this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      // const colors = config.variables;
      // const echarts: any = config.variables.echarts;

      this.options = {
        // backgroundColor: echarts.bg,
        color: ['#FF6347', '#3CB371'],
        
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
              { value: 335, name: 'Contas Pagas' },
              { value: 310, name: 'Valor Recebido' },
              
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
  }

}
