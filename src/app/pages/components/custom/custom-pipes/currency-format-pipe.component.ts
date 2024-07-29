import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@Pipe({
  name: 'currencyformat'
})
export class CurrencyFormatPipeComponent implements PipeTransform {

  transform(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
    if (!value) {
      return '';
    }

    let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    let newValue: string = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);

    return newValue;
  }

}