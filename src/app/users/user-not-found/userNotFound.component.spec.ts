import { TestBed, async } from '@angular/core/testing';
import { UserNotFoundComponent } from './userNotFound.component';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared/shared.module';

describe('UserNotFoundComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        UserNotFoundComponent
      ],
      providers: [
        Title
      ]
    }).compileComponents();
  }))

  it('should render user not found component', async(() => {
    const fixture = TestBed.createComponent(UserNotFoundComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});