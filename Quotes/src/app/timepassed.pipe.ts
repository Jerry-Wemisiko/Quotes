import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepassed'
})
export class TimepassedPipe implements PipeTransform {

  transform(value: any): number{
    let today:any=new Date();

    var timeDiff=Math.abs(value-today);
    var timeSecs=timeDiff*0.001;
    const secs=86400;
    var passedTime=Math.floor(timeSecs/secs);

    
    return passedTime;
  }

}
