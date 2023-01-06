import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from "../../model/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any =[]
  id: Number = 0
  cart: Product[] = 'cartList' in localStorage ? JSON.parse(localStorage.getItem("cartList")!) : []
  quantity: number[] = [];
  cartList: Product[] = []
  index: number = 0
  number: number = 1
  constructor(private _ProductService: ProductService, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService) { }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.quantity.push(i)
    }
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.id = Number(params.get('id'))
      },
    })
    this._ProductService.getProducts().subscribe({
      next: (value) => {
        this.product = value.find((product: Product) => product.id == this.id)!
        this.index = this.cart.findIndex((product: any) => product.Specification.id == this.id)
      },
    })
  }
  addedQuantity(number: number) {
    this.number = number
  }
  AddToCart(product: Product) {
    let cartItem = {
      quantity: Number(this.number),
      Specification: product
    }
    this._CartService.addToCart(cartItem)
    alert("The product has been added to the cart")
  }
}
