import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
public ProductList : any ;
filterCategory: any;
searchKey:string ="";
public searchTerm: string = "";
public searchT = new BehaviorSubject<string>("");
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.ProductList = res;
      this.filterCategory = res;
      console.log(res);

      this.ProductList.forEach((a: any) => {
        if (a.idCategory === "Diversos") {
          a.idCategory === "Diversos"
        }
      });
      console.log(res);
    })

  this.searchT.subscribe((val: any) => {
    this.searchKey = val;
  })
}

search(event: any) {
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.searchT.next(this.searchTerm);
}

filter(category: string) {
  this.filterCategory = this.ProductList
    .filter((a: any) => {
      if (a.idCategory === category || category === '') {
        return a;
      }
    })
}

}
