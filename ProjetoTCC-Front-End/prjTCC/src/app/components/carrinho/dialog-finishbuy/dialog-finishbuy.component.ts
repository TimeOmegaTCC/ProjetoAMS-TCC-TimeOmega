import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../../sistema-crud/services/cart.service';

@Component({
  selector: 'app-dialog-finishbuy',
  templateUrl: './dialog-finishbuy.component.html',
  styleUrls: ['./dialog-finishbuy.component.css']
})
export class DialogFinishbuyComponent implements OnInit {

  constructor(private route:Router,private dialogRef : MatDialogRef<DialogFinishbuyComponent>, private cartService : CartService) { }

  ngOnInit(): void {
  }
  finish(){
    this.route.navigate(["/finalizacao"]),
    this.dialogRef.close('Salvo');
    this.cartService.removeAllCart();
  }

}
