import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [  { path : "", component: HomeComponent  },
{ path : "Categories", component: CategoriesComponent  },
{ path : "Contact", component: ContactComponent  },
{ path : "Login", component: LoginComponent },
{ path : "Sports/:category", component: ProductComponent },
{ path : "Electronics/:category", component: ProductComponent },
{ path : "Dashboard", component: UserDashboardComponent },


{ path : "AboutUs", component: AboutusComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
