import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberComponent } from './components/subscriber/subscriber.component';
import { ContentComponent } from './components/content/content.component';
import { DataTableComponent } from './components/data-table/dataTable.component';
import { DataTableRowComponent } from './components/data-table/data-table-row/dataTableRow.component';
import { DataTableHeaderComponent } from './components/data-table/data-table-header/dataTableHeader.component';
import { DataTableCellComponent } from './components/data-table/data-table-cell/dataTableCell.component';
import { DataTableHeaderCellComponent } from './components/data-table/data-table-header-cell/dataTableHeaderCell.component';
import { UserAvatarComponent } from './components/user-avatar/userAvatar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SubscriberComponent,
    ContentComponent,
    DataTableComponent,
    DataTableRowComponent,
    DataTableHeaderComponent,
    DataTableCellComponent,
    DataTableHeaderCellComponent,
    UserAvatarComponent
  ],
  exports: [
    SubscriberComponent,
    ContentComponent,
    DataTableComponent,
    DataTableRowComponent,
    DataTableHeaderComponent,
    DataTableCellComponent,
    DataTableHeaderCellComponent,
    UserAvatarComponent
  ]
})
export class SharedModule {}
