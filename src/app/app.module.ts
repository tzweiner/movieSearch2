import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StubComponent } from './stub/stub.component';

@NgModule({
  declarations: [AppComponent, StubComponent],
  imports: [
    CommonModule, AppRoutingModule, BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
