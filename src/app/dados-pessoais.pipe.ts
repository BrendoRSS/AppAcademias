import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dadosPessoais',
  standalone: true
})
export class DadosPessoaisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
