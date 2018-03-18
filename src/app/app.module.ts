import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './appRouting.module';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    UsersModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
