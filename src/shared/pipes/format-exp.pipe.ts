import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatExp',
  standalone: true
})
export class FormatExpPipe implements PipeTransform {

  transform(value: string, charector: string): unknown {
    return value.replace(charector, ' ');
  }

}
