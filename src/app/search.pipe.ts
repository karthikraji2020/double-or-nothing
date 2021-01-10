import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.filter(function(search) {
      return (search.Name.toLowerCase().indexOf(args.toLowerCase()) > -1);
    });
    return value;
  }

}
