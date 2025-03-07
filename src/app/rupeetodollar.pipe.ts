import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupeetodollar'
})
export class RupeetodollarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value/80;
  }

}
