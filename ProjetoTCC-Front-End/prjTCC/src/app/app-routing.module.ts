import { CrudAdminComponent } from 'src/app/components/sistema-crud/crud-admin/crud-admin.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SACComponent } from './components/sac/sac.component';
import { CrudCategoryComponent } from 'src/app/components/sistema-crud/crud-category/crud-category.component';
import { CrudProductComponent } from './components/sistema-crud/crud-product/crud-product.component';
import { CrudClientComponent } from './components/sistema-crud/crud-client/crud-client.component';
import { CrudProviderComponent } from './components/sistema-crud/crud-provider/crud-provider.component';
import { ProdutosComponent } from './components/produtos/produtos.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'singup', component: CadastroComponent},
  {path:'sac', component: SACComponent},
  {path:'admin', component: CrudAdminComponent},
  {path:'admincategory', component: CrudCategoryComponent},
  {path:'adminproduct', component: CrudProductComponent},
  {path:'adminclient', component: CrudClientComponent},
  {path:'adminprovider', component: CrudProviderComponent},
  {path:'produtos', component: ProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

