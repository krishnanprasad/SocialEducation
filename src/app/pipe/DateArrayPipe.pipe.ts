
import { Pipe, PipeTransform } from '@angular/core';
import { DlDateTimePickerModel } from 'angular-bootstrap-datetimepicker';

@Pipe({
  name: 'datearray'
})

export class DateArrayPipe implements PipeTransform {
  public transform(value: any[], filterDate: Date, propName: string) {
    debugger
    const resultArray = [];
    for (const item of value) {
      if (new Date(item[propName]) >= filterDate) {
        resultArray.push(item)
      }
      //   if (filterString === 0) {
      //     if (item[propName] === 0) {
      //       resultArray.push(item)
      //     }
      //   }
      //   if (filterString === -1) {
      //     return value;
      //   }
    }
    return resultArray;
  }
}

