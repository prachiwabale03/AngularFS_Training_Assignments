import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterrange'
})
export class FilterrangePipe implements PipeTransform {

  transform(inputData:any[], min:number, max:number): any[]
  {
  
    return inputData.filter(item => item.EmpSalary>=min && item.EmpSalary<=max);
  }

}
