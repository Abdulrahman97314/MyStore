import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:Product[]=[]
  constructor(private _ProductService:ProductService) { }

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(value)=> {
        this.products=value
      },
    }
    )
  }
AddProductMsg(){
  alert("The product has been added to the cart")
}
}
