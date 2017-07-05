import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanPipe'
})
export class CleanPipePipe implements PipeTransform {

  transform(value: any, badWords: any): any {
    let badWordsList = badWords.split(',').map((item) => item.trim());
    console.log(badWordsList);
    for (let badWord of badWordsList) {
      value = value.replace(badWord, "$%#@!")
    }
    return value;
  }

}
