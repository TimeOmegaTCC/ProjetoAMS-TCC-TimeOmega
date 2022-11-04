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
}
