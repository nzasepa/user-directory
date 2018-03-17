import { TestBed, async } from '@angular/core/testing';
import { DataTableComponent } from './dataTable.component';

describe('DataTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTableComponent
      ]
    }).compileComponents();
  }))

  it('should render data table component', async(() => {
    const fixture = TestBed.createComponent(DataTableComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});