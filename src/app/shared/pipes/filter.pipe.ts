import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
  name: 'filter',
  pure: false
})

@Injectable()
export class FilterPipe implements PipeTransform {
  
  transform(charClasses: Array<any>): any {
    console.log('charClasses', charClasses);
    return charClasses.filter(char => char.school === 'Arcane')
  }


}
