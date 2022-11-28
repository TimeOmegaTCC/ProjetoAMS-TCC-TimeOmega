import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../sistema-crud/services/cart.service';
import { DialogFinishbuyComponent } from './dialog-finishbuy/dialog-finishbuy.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private dialog : MatDialog) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  openDialog() {
    this.dialog.open(DialogFinishbuyComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
      }
    })
  }
}


