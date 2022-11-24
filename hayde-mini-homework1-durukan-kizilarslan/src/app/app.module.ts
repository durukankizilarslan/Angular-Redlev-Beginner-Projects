import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {StyleClassModule} from 'primeng/styleclass';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    StyleClassModule,
    AccordionModule,
    PanelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
