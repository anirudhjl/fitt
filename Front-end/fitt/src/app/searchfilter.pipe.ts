import { IExercise } from 'src/app/_models/Exercises';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(IExercise: IExercise[], searchValue: string): IExercise[] {
    if (!IExercise || !searchValue) {
      return IExercise;
    }
    return IExercise.filter((IExercise) =>
      IExercise.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
  }
}
