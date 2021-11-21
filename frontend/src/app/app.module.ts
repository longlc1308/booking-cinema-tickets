import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MemberShipComponent } from './components/others/member-ship/member-ship.component';
import { SiteComponent } from './components/site/site.component';
import { RecruitmentComponent } from './components/others/recruitment/recruitment.component';
import { LoginRegisterComponent } from './components/authentication/login-register/login-register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { GroupSaleComponent } from './components/others/group-sale/group-sale.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafeHtmlPipeModule } from './shared/pipes/pipe.module';
import { BookingSeatComponent } from './components/booking-seat/booking-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LayoutsComponent,
    HeaderComponent,
    MemberShipComponent,
    SiteComponent,
    RecruitmentComponent,
    LoginRegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    GroupSaleComponent,
    BookingSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    SafeHtmlPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
