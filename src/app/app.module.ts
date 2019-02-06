import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
