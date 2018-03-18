import { Pipe, PipeTransform } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';

@Pipe({
  name: 'sortUsers'
})
export class SortUsersPipe implements PipeTransform {
  transform(value: Array<UserInterface>, exponent: string): Array<UserInterface> {
    if (!Array.isArray(value)) {
      return value;
    }

    const sortByName = (users: Array<UserInterface>): Array<UserInterface> => {
      return users.sort((a: UserInterface, b: UserInterface) => {
        return `${a.name.first} ${a.name.last}`.localeCompare(`${b.name.first} ${b.name.last}`);
      });
    };

    const sortByStatus = (users: Array<UserInterface>): Array<UserInterface> => {
      return new Array(
        ...sortByName(users.filter((user: UserInterface) => user.isActive)),
        ...sortByName(users.filter((user: UserInterface) => !user.isActive))
      );
    };

    const sortByEmail = (users: Array<UserInterface>): Array<UserInterface> => {
      return users.sort((a: UserInterface, b: UserInterface) => a.email.localeCompare(b.email));
    };

    const sortByCompany = (users: Array<UserInterface>): Array<UserInterface> => {
      return users.sort((a: UserInterface, b: UserInterface) => a.company.localeCompare(b.company));
    };

    switch (exponent) {
      case 'name':
        return sortByName(value);

      case 'status':
        return sortByStatus(value);

      case 'email':
        return sortByEmail(value);

      case 'company':
        return sortByCompany(value);

      default:
        return value;
    }
  }
}
