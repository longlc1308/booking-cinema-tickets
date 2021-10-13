import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginRegisterComponent } from './components/authentication/login-register/login-register.component';
import { CgvOnlineComponent } from './components/cgv-online/cgv-online.component';
import { GiftCardComponent } from './components/gift-card/gift-card.component';
import { GroupSaleComponent } from './components/group-sale/group-sale.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { MemberShipComponent } from './components/member-ship/member-ship.component';
import { MenuConcessionComponent } from './components/menu-concession/menu-concession.component';
import { SiteComponent } from './components/site/site.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginRegisterComponent },
      { path: 'site', component: SiteComponent },
      { path: 'cgv-member', component: MemberShipComponent },
      { path: 'gift-card', component: GiftCardComponent },
      { path: 'groupsale', component: GroupSaleComponent },
      {
        path: 'online-store',
        loadChildren: () =>
          import('./components/online-store/online-store.module').then(
            (m) => m.eStoreModule
          ),
      },
      {
        path: 'about-cgv',
        loadChildren: () =>
          import('./components/about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
  { path: 'menu-concession', component: MenuConcessionComponent },
  { path: 'cgv-online', component: CgvOnlineComponent },
  { path: 'admin/dashboard', component: AdminComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
