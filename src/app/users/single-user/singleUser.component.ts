import { Component, ViewChild, ElementRef } from '@angular/core';
import { SubscriberComponent } from '../../shared/components/subscriber/subscriber.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersStore } from '../users.store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import { UserInterface } from '../../interfaces/user.interface';
import { Title } from '@angular/platform-browser';
import {} from '@types/googlemaps';

@Component({
  selector: 'ud-single-user',
  templateUrl: './singleUser.component.html',
  styleUrls: ['./singleUser.component.scss']
})
export class SingleUserComponent extends SubscriberComponent {
  @ViewChild('addressMap') mapElement: ElementRef;
  user: UserInterface;
  usersFetched: boolean;

  private _titleService: Title;
  private _router: Router;

  constructor(router: Router, titleService: Title, activatedRoute: ActivatedRoute, usersStore: UsersStore) {
    super();

    this._titleService = titleService;
    this._router = router;

    this.subscriptions.push(
      Observable.combineLatest(
        activatedRoute.params.map((param) => param.email),
        usersStore.users$
      )
      .filter((values) => values.every(Boolean))
      .subscribe(([userEmail, users]) => this._setUser(userEmail, users))
    );
  }

  private _setUser(userEmail: string, users: Array<UserInterface>): void {
    this.user = users.filter((user: UserInterface) => user.email === userEmail)[0];
    this.usersFetched = true;

    if (this.user) {
      this._titleService.setTitle(`${this.user.name.first} ${this.user.name.last} | User directory`);
      setTimeout(() => this._initAddressMap(), 0);
    } else {
     this._router.navigate(['/users', 'not-found']);
    }
  }

  private _initAddressMap(): void {
    const lat = parseFloat(this.user.latitude);
    const lng = parseFloat(this.user.longitude);
    let map: google.maps.Map;
    let mapMarker: google.maps.Marker;
    let markerInfo: google.maps.InfoWindow;
    let centerPosition;

    if (!isNaN(lat) && !isNaN(lng)) {
      centerPosition = new google.maps.LatLng(lat, lng);

      map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 5,
        center: centerPosition
      });

      mapMarker = new google.maps.Marker({
        position: centerPosition,
        map: map
      });

      markerInfo = new google.maps.InfoWindow({
        content: this._markerInfoContent
      });

      mapMarker.addListener('click', () => {
        markerInfo.open(map, mapMarker);
      });

      google.maps.event.addListenerOnce(map, 'tilesloaded', () => {
        markerInfo.open(map, mapMarker);
      });
    }
  }

  private get _markerInfoContent(): string {
    const user = this.user;
    const address = user.address.split(', ').join(',<br />');

    return `
      <div style="font-size: 16px;">
        <strong>${user.name.first} ${user.name.last}</strong> (${user.company})<br />
        email: <a href="mailto:${user.email}">${user.email}</a><br />
        phone: <a href="tel:${user.phone}">${user.phone}</a><br />
        <br />
        ${address}
      </div>
    `;
  }
}
