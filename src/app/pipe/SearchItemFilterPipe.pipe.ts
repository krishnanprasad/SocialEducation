import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class SearchItemFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    debugger;
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      var joi = it.username.concat(" ",it.webinar)
      return joi.toLowerCase().includes(searchText);
    });
  }
}