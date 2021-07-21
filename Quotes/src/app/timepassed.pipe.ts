import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepassed'
})
export class TimepassedPipe implements PipeTransform {

  transform(value: any): number{
    return null;
  }

}
