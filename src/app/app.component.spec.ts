import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting.module';
import { MainModule } from './main/main.module';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        MainModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('should render app component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponent = fixture.debugElement.componentInstance;
    
    expect(appComponent).toBeTruthy();
  }));
});
