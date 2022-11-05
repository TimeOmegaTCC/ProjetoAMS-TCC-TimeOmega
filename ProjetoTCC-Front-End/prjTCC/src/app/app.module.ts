import { DialogAdminComponent } from './components/sistema-crud/crud-admin/dialog-admin/dialog-admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CarouselBasicComponent } from './components/carousel-basic/carousel-basic.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { SACComponent } from './components/sac/sac.component';
import { VitrineComponent } from './components/vitrine/vitrine.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavAdmComponent } from 'src/app/components/sistema-crud/nav-adm/nav-adm.component';
import { CrudCategoryComponent } from 'src/app/components/sistema-crud/crud-category/crud-category.component';
import { DialogCategoryComponent } from 'src/app/components/sistema-crud/crud-category/dialog-category/dialog-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudProductComponent } from 'src/app/components/sistema-crud/crud-product/crud-product.component';
import { CrudAdminComponent } from './components/sistema-crud/crud-admin/crud-admin.component';
import { CrudClientComponent } from './components/sistema-crud/crud-client/crud-client.component';
import { DialogProductComponent } from './components/sistema-crud/crud-product/dialog-product/dialog-product.component';
import { MatSelectModule } from '@angular/material/select';
import { CrudProviderComponent } from './components/sistema-crud/crud-provider/crud-provider.component';
import { DialogProviderComponent } from './components/sistema-crud/crud-provider/dialog-provider/dialog-provider.component';
import { SlidecategoryComponent } from './components/categorias/slidecategory/slidecategory.component';
import { ComputadoresComponent } from './components/categorias/computadores/computadores.component';
import { NotebookComponent } from './components/categorias/notebook/notebook.component';
import { FonesComponent } from './components/categorias/perifericos/fones/fones.component';
import { TecladoComponent } from './components/categorias/perifericos/teclado/teclado.component';
import { MouseComponent } from './components/categorias/perifericos/mouse/mouse.component';
import { PerifericosComponent } from './components/categorias/perifericos/perifericos.component';
import { ApoiodepulsoComponent } from './components/categorias/acessorios/apoiodepulso/apoiodepulso.component';
import { SuportesComponent } from './components/categorias/acessorios/suportes/suportes.component';
import { CabosComponent } from './components/categorias/acessorios/cabos/cabos.component';
import { AcessoriosComponent } from './components/categorias/acessorios/acessorios.component';
import { ArmazenamentoComponent } from './components/categorias/armazenamento/armazenamento.component';
import { SsdComponent } from './components/categorias/armazenamento/ssd/ssd.component';
import { HdComponent } from './components/categorias/armazenamento/hd/hd.component';
import { RamComponent } from './components/categorias/armazenamento/ram/ram.component';
import { PlacaMaeComponent } from './components/categorias/placa-mae/placa-mae.component';
import { FontesComponent } from './components/categorias/fontes/fontes.component';
import { ProcessadoresComponent } from './components/categorias/processadores/processadores.component';
import { PlacadevideoComponent } from './components/categorias/placadevideo/placadevideo.component';
import { OutrosComponent } from './components/categorias/outros/outros.component';
import { RefrigeracaoComponent } from './components/categorias/refrigeracao/refrigeracao.component';
import { PastatermicaComponent } from './components/categorias/refrigeracao/pastatermica/pastatermica.component';
import { CoolerComponent } from './components/categorias/refrigeracao/cooler/cooler.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent,
    HomePageComponent,
    NavbarComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    SACComponent,
    VitrineComponent,
    NavAdmComponent,
    CrudCategoryComponent,
    DialogCategoryComponent,
    CrudProductComponent,
    CrudAdminComponent,
    CrudClientComponent,
    DialogAdminComponent,
    DialogProductComponent,
    CrudProviderComponent,
    DialogProviderComponent,
    SlidecategoryComponent,
    ComputadoresComponent,
    NotebookComponent,
    FonesComponent,
    TecladoComponent,
    MouseComponent,
    PerifericosComponent,
    ApoiodepulsoComponent,
    SuportesComponent,
    CabosComponent,
    AcessoriosComponent,
    ArmazenamentoComponent,
    SsdComponent,
    HdComponent,
    RamComponent,
    PlacaMaeComponent,
    FontesComponent,
    ProcessadoresComponent,
    PlacadevideoComponent,
    OutrosComponent,
    RefrigeracaoComponent,
    PastatermicaComponent,
    CoolerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
