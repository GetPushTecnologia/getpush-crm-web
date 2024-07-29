import { CurrencyFormatPipeComponent } from "../pages/components/custom/custom-pipes/currency-format-pipe.component";

export default class Utils {

  constructor(private currencyPipe: CurrencyFormatPipeComponent) {}

  transformCurrency(value, symbolDisplay, digits) {
    let newValue;
    newValue = this.currencyPipe.transform(value, null, symbolDisplay, digits);
    return newValue;
  }

}