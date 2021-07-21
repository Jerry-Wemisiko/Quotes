import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepassed'
})
export class TimepassedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
