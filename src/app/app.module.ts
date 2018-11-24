import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRouting } from '../../src/app.router'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './shared/request.interceptor';
import { AuthModule } from './admin-auth/auth.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CommonindexModule } from './commonindex/commonindex.module';
import { PlacesModule } from './places/places.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    LoginModule,
    HttpClientModule,
    AuthModule,
    HeaderModule,
    FooterModule,
    DashboardModule,
    CommonindexModule,
    PlacesModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
