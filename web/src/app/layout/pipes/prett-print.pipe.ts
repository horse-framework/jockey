import { Pipe, PipeTransform } from '@angular/core';

type FormatOptions = {
  indent?: number,
  linkUrls?: boolean,
  quoteKeys?: boolean;
};
type JsonType = 'key' | 'string' | 'number' | 'boolean' | 'null' | 'mark';
const settings: FormatOptions = { indent: 3, linkUrls: true, quoteKeys: false };

@Pipe({
  name: 'prettyprint'
})
export class PrettyPrintPipe implements PipeTransform {

  transform(data: any): string {
    const jsonLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/mg;
    // Regex parses each line of the JSON string into four parts:
    //    Capture group       Part        Description                  '   "active": true,'
    //    ------------------  ----------  ---------------------------  --------------------
    //    ( *)                p1: indent  Spaces for indentation       '   '
    //    ("[^"]+": )         p2: key     Key name                     '"active": '
    //    ("[^"]*"|[\w.+-]*)  p3: value   Key value                    'true'
    //    ([{}[\],]*)         p4: end     Line termination characters  ','
    const json = JSON.stringify(data, null, settings.indent) || 'undefined';
    return this.htmlEntities(json).replace(jsonLine, this.replacer);
  }

  private htmlEntities = (text: string) => {
    // Makes text displayable in browsers
    return text
      .replace(/&/g, '&amp;')
      .replace(/\\"/g, '&bsol;&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private replacer = (match: string, p1: string, p2: string, p3: string, p4: string): string => {
    // Converts the four parenthesized capture groups (indent, key, value, end) into HTML
    const part = { indent: p1, key: p2, value: p3, end: p4 };
    const findName = settings.quoteKeys ? /(.*)(): / : /"([\w$]+)": |(.*): /;
    const indentHtml = part.indent || '';
    const keyName = part.key && part.key.replace(findName, '$1$2');
    const keyHtml = part.key ? this.spanTag('key', keyName) + this.spanTag('mark', ': ') : '';
    const valueHtml = part.value ? this.buildValueHtml(part.value) : '';
    const endHtml = this.spanTag('mark', part.end);
    return indentHtml + keyHtml + valueHtml + endHtml;
  }

  private buildValueHtml = (value: string): string => {
    // Returns a string like: "<span class=json-number>3.1415</span>"
    const strType = /^"/.test(value) && 'string';
    const boolType = ['true', 'false'].includes(value) && 'boolean';
    const nullType = value === 'null' && 'null';
    const type = boolType || nullType || strType || 'number';
    const urlRegex = /https?:\/\/[^\s"]+/g;
    const makeLink = (link: string) => '<a class=json-link href="' + link + '">' + link + '</a>';
    const display = strType && settings.linkUrls ? value.replace(urlRegex, makeLink) : value;
    return this.spanTag(type, display);
  }

  private spanTag = (type: JsonType, display?: string): string =>
    display ? '<span class=json-' + type + '>' + display + '</span>' : ''

}
