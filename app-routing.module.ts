import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'about' ,component:AboutComponent},
  {path:'home' ,component:HomeComponent},
  {path:'service',component:ServiceComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
