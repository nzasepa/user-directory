import { Pipe, PipeTransform } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {
  transform(value: Array<UserInterface>, exponent: string): Array<UserInterface> {
    if (!Array.isArray(value)) {
      return value
    }

    switch (exponent) {
      case 'name':
        return this._filterByName(value);

      case 'status':
        return new Array(
          ...this._filterByName(value.filter((user: UserInterface) => user.isActive)),
          ...this._filterByName(value.filter((user: UserInterface) => !user.isActive))
        );

      case 'email':
        return value.sort((a: UserInterface, b: UserInterface) => a.email.localeCompare(b.email))

      case 'company':
        return value.sort((a: UserInterface, b: UserInterface) => a.company.localeCompare(b.company))

      default:
        return value;
    }
  }

  private _filterByName(users: Array<UserInterface>): Array<UserInterface> {
    return users.sort((a: UserInterface, b: UserInterface) => {
      return `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`);
    });
  }
}
