import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { route, HeaderComponent, SearchComponent } from './routing';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpComponent } from './http/http.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    UserComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
