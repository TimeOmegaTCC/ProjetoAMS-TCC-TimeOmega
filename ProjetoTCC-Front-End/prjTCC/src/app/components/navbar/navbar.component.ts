import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../sistema-crud/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public totalItem : number = 0;

  constructor(private route: Router, private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  login(){
    this.route.navigate(["/login"])
  }

  singup(){
    this.route.navigate(["/singup"])
  }

  sac(){
    this.route.navigate(["/sac"])
  }

  produtos(){
    this.route.navigate(["/produtos"])
  }

  carrinho(){
    this.route.navigate(["/carrinho"])
  }
}

