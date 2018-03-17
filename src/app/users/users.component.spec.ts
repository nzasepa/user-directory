import { TestBed, async } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from './users.service';
import { UsersStore } from './users.store';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        UsersComponent
      ],
      providers: [
        UsersService,
        UsersStore
      ]
    }).compileComponents();
  }));

  it('should render users component', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
