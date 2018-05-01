import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, propName : string, args?: any): any {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const response = [];

    for(const item of value ){
      if(item[propName] === filterString){
        response.push(item);
      }
    }
    return response;
  }

}
