import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'notificationfilter',
  pure: false
})
export class NoticationSearchItemFilterPipe implements PipeTransform {
  transform(items: any[], filters: any[]): any[] {
   

    if (!items) return [];
    if (filters == []) return items;
    if (filters.length == 0) {
      return items;
    }
    else {
      return items.filter(x => filters.indexOf(x.notificationtype) !== -1);
      // return it.notificationtype == e;
    }

  }
}