import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/authentication/login-register/login-register.component';
import { GroupSaleComponent } from './components/others/group-sale/group-sale.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { MemberShipComponent } from './components/others/member-ship/member-ship.component';
import { RecruitmentComponent } from './components/others/recruitment/recruitment.component';
import { SiteComponent } from './components/site/site.component';
import { NotFoundComponent } from './components/others/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { RoleGuard } from './shared/guards/role.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginRegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password/:token', component: ResetPasswordComponent },
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
      { path: '404-page-not-found', component: NotFoundComponent },
    ],
  },
  { path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./components/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'user/:id',
    canActivate: [RoleGuard],
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
