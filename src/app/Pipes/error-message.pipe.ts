import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage',
  standalone: true
})
export class ErrorMessagePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return "This is too short"
    }
    return ''
  }

}
