import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewProductComponent } from './products-manager/new-product/new-product.component';
import { ProductsListComponent } from './products-manager/products-list/products-list.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';
import { SitesManagerComponent } from './sites-manager/sites-manager.component';
import { ShowtimesManagerComponent } from './showtimes-manager/showtimes-manager.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipeModule } from 'src/app/shared/pipes/pipe.module';
import { MatSelectModule } from '@angular/material/select';

const adminRouters : Routes = [
  { path: '', component:  AdminComponent, children: [
    { path: 'dashboard', component:DashboardComponent  },
    { path: 'products', component:ProductsManagerComponent, children: [
      { path: 'products-list', component:ProductsListComponent },
      { path: 'handle-product', component: NewProductComponent },
      { path: '', redirectTo: 'products-list', pathMatch:'full' }
    ]},
    { path: 'users', component:UsersManagerComponent },
    { path: 'orders', component: OrdersManagerComponent },
    { path: 'sites', component: SitesManagerComponent },
    { path: 'showtimes', component: ShowtimesManagerComponent },
    { path: '', redirectTo: 'dashboard',  pathMatch:'full' },
    { path: '**', redirectTo: 'dashboard',  pathMatch:'full' },
  ]}
]

@NgModule({
  declarations: [
    AdminComponent,
    UsersManagerComponent,
    ProductsManagerComponent,
    DashboardComponent,
    NewProductComponent,
    ProductsListComponent,
    OrdersManagerComponent,
    SitesManagerComponent,
    ShowtimesManagerComponent
  ],
  imports: [
    SafeHtmlPipeModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRouters),
  ]
})

export class AdminModule {}
