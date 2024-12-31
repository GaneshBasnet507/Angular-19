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
import { CreateUserComponent } from './create-user/create-user.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { ProtectedLayoutComponent } from './protected-layout/protected-layout.component';


export const routes: Routes = [
    {
      path: '',
      component: PublicLayoutComponent,
      children: [
        { path: '', component: HomeComponent }, 
        { path: 'register', component: RegisterComponent },
        { path: 'login', component: LoginComponent },
        { path: 'forgot-username', component: ForgotUsernameComponent },
        { path: 'create-username', component: CreateUsernameComponent },
        { path: 'create-password', component: CreatePasswordComponent },
        { path: 'forgot-password', component: ForgotPasswordComponent },
        { path: 'change-password', component: ChangePasswordComponent },
  
      ],
    },
    {
      path: 'protected-layout',
      component: ProtectedLayoutComponent,
        
      // children: [
      //   {
      //     path: '',
      //     component: DashboardComponent,
          children: [
            { path: 'lists', component: ListsComponent },
            { path: 'notifications', component: NotificationsComponent },
            { path: 'create-user', component: CreateUserComponent },
        
          ],
        },
        
      ]
    

