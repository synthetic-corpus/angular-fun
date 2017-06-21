import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // Value will be the array of servers.
  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === ''){
      return value;
    }
    var valueArray = []
    for (const item of value){
      if (item.status === filterString) {
        valueArray.push(item);
      }
    }
    return valueArray;
  }

}
