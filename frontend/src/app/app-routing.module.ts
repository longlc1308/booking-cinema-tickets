import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/authentication/login-register/login-register.component';
import { GroupSaleComponent } from './components/others/group-sale/group-sale.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { MemberShipComponent } from './components/others/member-ship/member-ship.component';
import { RecruitmentComponent } from './components/others/recruitment/recruitment.component';
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
      { path: 'groupsale', component: GroupSaleComponent },
      { path: 'recruitment', component: RecruitmentComponent },
      {
        path: 'movies',
        loadChildren: () =>
        import('./components/movies/movies.module').then(
          (m) => m.movieModule
        )
      },
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
  { path: 'admin',
    loadChildren: () =>
    import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'user',
    loadChildren: () =>
    import('./components/user/user.module').then((m) => m.UserModule)},
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
