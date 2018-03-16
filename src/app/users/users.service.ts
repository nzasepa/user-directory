import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserInterface } from '../interfaces/user.interface';

@Injectable()
export class UsersService {
  private _http: HttpClient

  constructor(http: HttpClient) {
    this._http = http;
  }

  fetchUsers(): Observable<Array<UserInterface>> {
    return this._http.get<Array<UserInterface>>(`${window.location.protocol}//${window.location.host}/mockData.json`)
      .pipe(
        catchError((err) => {
          console.error('[UsersService Error]', err);
          return Observable.of(new Array())
        })
      )
  }
}
