import { TestBed, async } from '@angular/core/testing';
import { DataTableCellComponent } from './dataTableCell.component';

describe('DataTableCellComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTableCellComponent
      ]
    }).compileComponents();
  }));

  it('should render data table cell component', async(() => {
    const fixture = TestBed.createComponent(DataTableCellComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));
});
