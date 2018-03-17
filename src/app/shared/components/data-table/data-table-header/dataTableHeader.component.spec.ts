import { TestBed, async } from '@angular/core/testing';
import { DataTableHeaderComponent } from './dataTableHeader.component';

describe('DataTableHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTableHeaderComponent
      ]
    }).compileComponents();
  }))

  it('should render data table header component', async(() => {
    const fixture = TestBed.createComponent(DataTableHeaderComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});