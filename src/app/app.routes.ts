import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { CreateUsernameComponent } from './create-username/create-username.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component';
import { Component } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';


export const routes: Routes = [

    { path: 'register', component: RegisterComponent },
    { path: 'forgot-username', component: ForgotUsernameComponent },
    { path: 'create-username', component: CreateUsernameComponent},
    { path: 'create-password', component: CreatePasswordComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent},
    {path:'change-password',component:ChangePasswordComponent},
    {path:'lists',component:ListsComponent},
    {path:'dashboard',component:DashboardComponent, children: [{path:'lists',component:ListsComponent
     }, {path:'notifications',component:NotificationsComponent}]},
   
    {path:'login',component:LoginComponent},
    {path:'',component:HomeComponent}
];
