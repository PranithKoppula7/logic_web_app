import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { TodayQuestionComponent } from './components/today-question/today-question.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout.component';
import { HomeLayoutComponent } from './shared/layouts/home-layout.component';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DisplaycardComponent,
    TodayQuestionComponent,
    LoginLayoutComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThirdPartyModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
