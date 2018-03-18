import { TestBed, async } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from './users.service';
import { UsersStore } from './users.store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsersListComponent } from './users-list/usersList.component';
import { MainModule } from '../main/main.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';

describe('UsersComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MainModule,
        PipesModule,
        SharedModule
      ],
      declarations: [
        UsersComponent,
        UsersListComponent
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
