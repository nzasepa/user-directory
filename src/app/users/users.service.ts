import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UsersService {
  private _http: HttpClient

  constructor(http: HttpClient) {
    this._http = http;
  }

  fetchUsers(): Observable<any> {
    return this._http.get(`${window.location.protocol}//${window.location.host}/mockData.json`)
      .pipe(
        catchError((err) => {
          console.error('[UsersService Error]', err);
          return Observable.of(new Array())
        })
      )
  }
}
