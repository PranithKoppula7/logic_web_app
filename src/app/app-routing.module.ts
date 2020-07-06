import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';
import { TodayQuestionComponent } from './components/today-question/today-question.component';
import { HomeLayoutComponent } from './shared/layouts/home-layout.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { CreateQuestionComponent } from './components/admin/create-question/create-question.component';


const routes: Routes = [
  { 
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'today-question',
        component: TodayQuestionComponent
      }
    ]
  },
  {
    path: 'admin',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent
      },
      {
        path: 'create-question',
        component: CreateQuestionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
