import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { GraphComponentComponent } from './graph-component/graph-component.component'

@NgModule({
  declarations: [AppComponent, GraphComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
