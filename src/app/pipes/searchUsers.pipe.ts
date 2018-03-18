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

    const lowerCaseExponent = exponent.toLocaleLowerCase();

    return value.filter((user: UserInterface) => (
      `${user.name.first} ${user.name.last}`.toLocaleLowerCase().indexOf(lowerCaseExponent) > -1 ||
      user.email.toLocaleLowerCase().indexOf(lowerCaseExponent) > -1
    ));
  }
}
