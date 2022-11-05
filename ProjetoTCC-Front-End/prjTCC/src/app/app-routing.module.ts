import { ComputadoresComponent } from './components/categorias/computadores/computadores.component';
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
import { SlidecategoryComponent } from './components/categorias/slidecategory/slidecategory.component';
import { NotebookComponent } from './components/categorias/notebook/notebook.component';
import { FonesComponent } from './components/categorias/perifericos/fones/fones.component';
import { TecladoComponent } from './components/categorias/perifericos/teclado/teclado.component';
import { MouseComponent } from './components/categorias/perifericos/mouse/mouse.component';
import { PerifericosComponent } from './components/categorias/perifericos/perifericos.component';
import { AcessoriosComponent } from './components/categorias/acessorios/acessorios.component';
import { ApoiodepulsoComponent } from './components/categorias/acessorios/apoiodepulso/apoiodepulso.component';
import { SuportesComponent } from './components/categorias/acessorios/suportes/suportes.component';
import { CabosComponent } from './components/categorias/acessorios/cabos/cabos.component';
import { ArmazenamentoComponent } from './components/categorias/armazenamento/armazenamento.component';
import { SsdComponent } from './components/categorias/armazenamento/ssd/ssd.component';
import { HdComponent } from './components/categorias/armazenamento/hd/hd.component';
import { RamComponent } from './components/categorias/armazenamento/ram/ram.component';
import { PlacaMaeComponent } from './components/categorias/placa-mae/placa-mae.component';
import { RefrigeracaoComponent } from './components/categorias/refrigeracao/refrigeracao.component';
import { PastatermicaComponent } from './components/categorias/refrigeracao/pastatermica/pastatermica.component';
import { CoolerComponent } from './components/categorias/refrigeracao/cooler/cooler.component';
import { FontesComponent } from './components/categorias/fontes/fontes.component';
import { OutrosComponent } from './components/categorias/outros/outros.component';
import { PlacadevideoComponent } from './components/categorias/placadevideo/placadevideo.component';
import { ProcessadoresComponent } from './components/categorias/processadores/processadores.component';


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
  {path:'categoriacomputador', component: ComputadoresComponent},
  {path:'categorianotebook', component: NotebookComponent},
  {path:'categoriaperifericos', component: PerifericosComponent},
  {path:'subcategoriafones', component: FonesComponent},
  {path:'subcategoriateclado', component: TecladoComponent},
  {path:'subcategoriamouse', component: MouseComponent},
  {path:'categoriaacessorio', component: AcessoriosComponent},
  {path:'subcategoriapoiodepulso', component: ApoiodepulsoComponent},
  {path:'subcategoriasuporte', component: SuportesComponent},
  {path:'subcategoriacabos', component: CabosComponent},
  {path:'categoriaarmazenamento', component: ArmazenamentoComponent},
  {path:'subcategoriassd', component: SsdComponent},
  {path:'subcategoriahd', component: HdComponent},
  {path:'subcategoriaram', component: RamComponent},
  {path:'categoriaplacamae', component: PlacaMaeComponent},
  {path:'slidecategory', component: SlidecategoryComponent},
  {path:'categoriarefrigeracao', component: RefrigeracaoComponent},
  {path:'subcategoriapastatermica', component: PastatermicaComponent},
  {path:'subcategoriacooler', component: CoolerComponent},
  {path:'categoriafontes', component: FontesComponent},
  {path:'categoriaprocessadores', component: ProcessadoresComponent},
  {path:'categoriaplacadevideo', component: PlacadevideoComponent},
  {path:'categoriaoutros', component: OutrosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

