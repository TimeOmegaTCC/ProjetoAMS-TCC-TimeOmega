import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidecategory',
  templateUrl: './slidecategory.component.html',
  styleUrls: ['./slidecategory.component.css']
})
export class SlidecategoryComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  computadores(){
    this.route.navigate(["/categoriacomputadores"])
  }

  notebook(){
    this.route.navigate(["/categorianotebook"])
  }

  perifericos(){
    this.route.navigate(["/categoriaperifericos"])
  }

  fones(){
    this.route.navigate(["/subcategoriafones"])
  }

  teclado(){
    this.route.navigate(["/subcategoriateclado"])
  }

  mouse(){
    this.route.navigate(["/subcategoriamouse"])
  }

  acessorios(){
    this.route.navigate(["/categoriaacessorio"])
  }

  apoiodepulso(){
    this.route.navigate(["/subcategoriapoiodepulso"])
  }

  suporte(){
    this.route.navigate(["/subcategoriasuporte"])
  }

  cabos(){
    this.route.navigate(["/subcategoriacabos"])
  }

  ssd(){
    this.route.navigate(["/subcategoriassd"])
  }

  hd(){
    this.route.navigate(["/subcategoriahd"])
  }

  ram(){
    this.route.navigate(["/subcategoriaram"])
  }

  armazenamento(){
    this.route.navigate(["/categoriaarmazenamento"])
  }

  placamae(){
    this.route.navigate(["/categoriaplacamae"])
  }

  refrigeracao(){
    this.route.navigate(["/categoriarefrigeracao"])
  }

  pastatermica(){
    this.route.navigate(["/subcategoriapastatermica"])
  }

  cooler(){
    this.route.navigate(["/subcategoriacooler"])
  }

  fontes(){
    this.route.navigate(["/categoriafontes"])
  }

  processadores(){
    this.route.navigate(["/categoriaprocessadores"])
  }

  placadevideo(){
    this.route.navigate(["/categoriaplacadevideo"])
  }

  outros(){
    this.route.navigate(["/categoriaoutros"])
  }
}

