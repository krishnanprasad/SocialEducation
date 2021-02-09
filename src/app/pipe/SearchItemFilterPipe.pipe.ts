import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class SearchItemFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {


    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      var joi = it.web_name.concat(" ", it.web_tag)
      return joi.toLowerCase().includes(searchText);
    });
  }
}