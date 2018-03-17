import { TestBed, async } from '@angular/core/testing';
import { SingleUserComponent } from './singleUser.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';
import { Title } from '@angular/platform-browser';
import { UsersStore } from '../users.store';

describe('SingleUserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        SingleUserComponent
      ],
      providers: [
        UsersStore,
        Title
      ]
    }).compileComponents();
  }))

  it('should render single user component', async(() => {
    const fixture = TestBed.createComponent(SingleUserComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});