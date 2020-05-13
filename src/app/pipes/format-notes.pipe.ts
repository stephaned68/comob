import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'formatNotes'
})

@Injectable()

export class FormatNotes implements PipeTransform {

  transform(value: string, args?: any): SafeHtml {
    let notes = '';
    for (let line of value.split('\n')) {
      let title = '';
      if (line.indexOf(':') !== -1) {
        title = `<strong>${line.split(':')[0]}:</strong>`;
        line = line.split(':')[1];
      }
      notes += `<p>${title}${line}</p>`;
    }
    return notes;
  }

}
