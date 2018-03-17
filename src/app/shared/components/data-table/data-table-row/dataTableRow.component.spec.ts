import { TestBed, async } from '@angular/core/testing';
import { DataTableRowComponent } from './dataTableRow.component';

describe('DataTableRowComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DataTableRowComponent
      ]
    }).compileComponents();
  }))

  it('should render data table row component', async(() => {
    const fixture = TestBed.createComponent(DataTableRowComponent);
    const component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }))
});