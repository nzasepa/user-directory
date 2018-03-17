import { Pipe, PipeTransform } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {
  transform(value: Array<UserInterface>, exponent: string): Array<UserInterface> {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.filter((user: UserInterface) => (
      `${user.name.first} ${user.name.last}`.indexOf(exponent) > -1 ||
      user.email.indexOf(exponent) > -1 ||
      user.company.indexOf(exponent) > -1
    ));
  }
}
