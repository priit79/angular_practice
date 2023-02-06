import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DoggiesDirective } from './doggies.directive';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DoggiesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
