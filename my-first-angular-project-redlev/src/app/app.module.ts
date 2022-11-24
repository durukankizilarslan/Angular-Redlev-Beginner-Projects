import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MyThirdComponentComponent } from './my-third-component/my-third-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    ContactFormComponent,
    MyThirdComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
