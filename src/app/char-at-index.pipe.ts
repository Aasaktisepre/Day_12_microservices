import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charAtIndex'
})
export class CharAtIndexPipe implements PipeTransform {

  transform(value: string, index: number): string {
    return value.charAt(index) ;
  }

}
