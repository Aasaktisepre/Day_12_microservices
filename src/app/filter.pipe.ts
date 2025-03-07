import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    if (args[0] === 'name') {
      return value['name'];
    } else if (args[0] === 'number') {
      return value['number'];
    }
    return "property not found";  
  }

}
