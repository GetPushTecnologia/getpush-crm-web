import { DatePipe } from "@angular/common";
import { CurrencyFormatPipeComponent } from "../pages/components/custom/custom-pipes/currency-format-pipe.component";

export default class Utils {

  constructor(private currencyPipe: CurrencyFormatPipeComponent,
    private datePipe: DatePipe
  ) {}

  transformCurrency(value, symbolDisplay, digits) {
    let newValue;
    newValue = this.currencyPipe.transform(value, null, symbolDisplay, digits);
    return newValue;
  }

  transformDate(value, format) {
    return this.datePipe.transform(value, format, null, "pt-BR");
  }

}
