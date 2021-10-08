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
import { MemberShipComponent } from './components/member-ship/member-ship.component';
import { SiteComponent } from './components/site/site.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginRegisterComponent } from './components/authentication/login-register/login-register.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { GiftCardComponent } from './components/gift-card/gift-card.component';
import { GroupSaleComponent } from './components/group-sale/group-sale.component';
import { MenuConcessionComponent } from './components/menu-concession/menu-concession.component';
import { CgvOnlineComponent } from './components/cgv-online/cgv-online.component';

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
    ContactComponent,
    AdminComponent,
    LoginRegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SafeHtmlPipe,
    GiftCardComponent,
    GroupSaleComponent,
    MenuConcessionComponent,
    CgvOnlineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
