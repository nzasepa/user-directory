import { TestBed, async } from '@angular/core/testing';
import { UserAvatarComponent } from './userAvatar.component';
import { By } from '@angular/platform-browser';

describe('UserAvatarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserAvatarComponent
      ]
    }).compileComponents();
  }));

  it('should render user avatar component', async(() => {
    const fixture = TestBed.createComponent(UserAvatarComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));

  it('should display image from input', async(() => {
    const fixture = TestBed.createComponent(UserAvatarComponent);
    const component = fixture.debugElement.componentInstance;
    let userAvatarImage;

    component.avatarUrl = 'http://placehold.it/32x32';
    fixture.detectChanges();

    userAvatarImage = fixture.debugElement.query(By.css('img')).nativeElement;

    expect(userAvatarImage.src).toBe('http://placehold.it/32x32');
  }));

  it('should display active status', async(() => {
    const fixture = TestBed.createComponent(UserAvatarComponent);
    const component = fixture.debugElement.componentInstance;
    let userStatus;

    component.isActive = true;
    fixture.detectChanges();

    userStatus = fixture.debugElement.query(By.css('.status')).nativeElement;

    expect(userStatus.className).toEqual('status active');
  }));

  it('should display inactive status', async(() => {
    const fixture = TestBed.createComponent(UserAvatarComponent);
    const component = fixture.debugElement.componentInstance;
    let userStatus;

    component.isActive = false;
    fixture.detectChanges();

    userStatus = fixture.debugElement.query(By.css('.status')).nativeElement;

    expect(userStatus.className).toEqual('status inactive');
  }));
});
