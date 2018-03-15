import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './appRouting.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    MainModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
