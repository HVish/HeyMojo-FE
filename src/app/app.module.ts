import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';
import { ProfileComponent } from './profile/profile.component';
import { SessionService } from './session.service';
import { DataService } from './data.service';
import { FbService } from './fb.service';
import { LoaderComponent } from './loader/loader.component';
import { FbdetailsComponent } from './fbdetails/fbdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const LocalStorage = { provide: 'LOCALSTORAGE', useFactory: getLocalStorage };

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    LoaderComponent,
    FbdetailsComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [
    ApiService,
    SessionService,
    DataService,
    LocalStorage,
    FbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}
