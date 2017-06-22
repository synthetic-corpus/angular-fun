import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  // Takes in a string. Returns the reverse of that string.
  // Why, I don't know.
  transform(value: string): any {
    var backwards = value.split("");
    backwards.reverse();
    var reverseWord = backwards.join("");
    return reverseWord;

  }

}
