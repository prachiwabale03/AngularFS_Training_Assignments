import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(input:number): string {
    let output:string ="";

    if(input==1) output = "Outstanding";
    else if(input==2) {output = "Excellent";}
    else if(input==4) {output = "Good";}

    else {output = "Average";}

    return output;
  }

}
