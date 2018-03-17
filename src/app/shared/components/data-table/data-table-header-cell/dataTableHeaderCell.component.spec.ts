import { TestBed, async } from '@angular/core/testing';
import { DataTableHeaderCellComponent } from './dataTableHeaderCell.component';

describe('DataTableHeaderCellComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTableHeaderCellComponent
      ]
    }).compileComponents();
  }))

  it('should render data table header cell component', async(() => {
    const fixture = TestBed.createComponent(DataTableHeaderCellComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});