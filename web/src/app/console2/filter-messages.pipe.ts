import { Pipe, PipeTransform } from '@angular/core';
import { ConsoleMessage } from 'src/models/console.message';

// this pipe will using for filter console messages

@Pipe({
  name: 'filterMessages',
  pure: false
})
export class FilterMessagesPipe implements PipeTransform {
  transform(messages: ConsoleMessage[], search: string): any {
    if (search.length < 1) return messages;
    return messages.filter(message => message.messageId.includes(search) || message.message.includes(search));
  }
}
