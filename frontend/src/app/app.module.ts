import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MemberShipComponent } from './components/member-ship/member-ship.component';
import { SiteComponent } from './components/site/site.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { ContactComponent } from './components/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LayoutsComponent,
    HeaderComponent,
    MemberShipComponent,
    SiteComponent,
    IntroductionComponent,
    RecruitmentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
