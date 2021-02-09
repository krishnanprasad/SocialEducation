
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterarray'
})

export class FilterArrayPipe implements PipeTransform {
  public transform(value: any[], filterString: number, propName: string) {
    const resultArray = [];
    if (value.length === 0 || propName === '') {
      return value;
    }

    for (const item of value) {
      if (filterString > 0) {
        if (item[propName] > filterString) {
          resultArray.push(item)
        }
      }
      if (filterString === 0) {
        if (item[propName] === 0) {
          resultArray.push(item)
        }
      }
      if (filterString === -1) {
        return value;
      }
    }
    return resultArray;
  }
}

