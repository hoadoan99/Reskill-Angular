import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateComponent } from './pages/users/create/create.component';
import { EditComponent } from './pages/users/edit/edit.component';

const routes: Routes = [
  { path: '',redirectTo:"/admin/login", pathMatch:"full"},
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin', component: AdminLayoutComponent, children:[
        { path: 'profile', component: ProfileComponent },
        { path: 'users', component: UsersComponent },
        { path: 'users/create', component: CreateComponent },
        { path: 'users/edit', component: EditComponent },
  ] },
    { path: '**', component: NotFoundComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
