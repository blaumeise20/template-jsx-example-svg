import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientSideRendererComponent } from './client-side-renderer/client-side-renderer.component';
import { ServerSideRendererComponent } from './server-side-renderer/server-side-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientSideRendererComponent,
    ServerSideRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
