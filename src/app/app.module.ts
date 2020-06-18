import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ThirdPartyModule } from './shared/third-party.module';
import { ValidateService } from './shared/services/validate.service';
import { AuthService } from './shared/services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplaycardComponent } from './components/displaycard/displaycard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DisplaycardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdPartyModule,
    BrowserAnimationsModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
