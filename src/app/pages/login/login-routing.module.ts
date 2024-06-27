import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'callback',
    pathMatch: 'prefix'
  },
  {
    path: 'callback',
    component: LoginComponent,
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
