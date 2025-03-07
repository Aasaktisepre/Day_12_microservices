import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneconversion'
})
export class MoneconversionPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value*80;
  }

}
