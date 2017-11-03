import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydohcFilter'
})
export class MydohcFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
