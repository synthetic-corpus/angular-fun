import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  // Name here is the name this pipe is referred to via HTML.
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  // A pipe will take in a value.
  // Then, the return statement is the resulte of that value.
  // Value "any" will work, but I expect "string" to work better.

  transform(value: string){
    return value.substring(0,10);
  }
}
