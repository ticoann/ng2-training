import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BindingsComponent } from './bindings/bindings.component';
import * as comm from './communication';
import {HidingComponent} from "./hiding/hiding.component";
import {HttpComponent} from "./http/http.component";
import {ModelComponent} from "./model/model.component";
import {NgforComponent} from "./ngfor/ngfor.component";
import {NgifComponent} from "./ngif/ngif.component";
import {NgswitchComponent} from "./ngswitch/ngswitch.component";


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BindingsComponent,
    comm.CommunicationComponent, comm.CommunicationComponent2, comm.HelloWorld, comm.HelloWorld2,
    HidingComponent,
    HttpComponent,
    ModelComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }