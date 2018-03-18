import { TestBed, async } from '@angular/core/testing';
import { UsersListComponent } from './usersList.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersStore } from '../users.store';
import { Title } from '@angular/platform-browser';

describe('UsersListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        SharedModule,
        PipesModule
      ],
      declarations: [
        UsersListComponent
      ],
      providers: [
        UsersStore,
        Title
      ]
    }).compileComponents();
  }));

  it('should render users list component', async(() => {
    const fixture = TestBed.createComponent(UsersListComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
