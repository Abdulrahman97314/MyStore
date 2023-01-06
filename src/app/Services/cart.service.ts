import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from "../../app/model/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = 'cartList' in localStorage ? JSON.parse(localStorage.getItem("cartList")!) : []
  index: number = 0
  cartList = new BehaviorSubject([])
  constructor() {
    if ('cartList' in localStorage) {
      this.cartList.next(JSON.parse(localStorage.getItem("cartList")!))
    }
  }
  addToCart(product: CartItem) {
    if (this.check(product) == true) {
      this.cart.splice(this.index, 1, product)
      localStorage.setItem("cartList", JSON.stringify(this.cart))
    }
    else {
      this.cart.push(product)
      localStorage.setItem("cartList", JSON.stringify(this.cart))
    }
    this.cartList.next(this.cart)
  }
  updateCartList() {
    this.cart=JSON.parse(localStorage.getItem("cartList")!)
    this.cartList.next(this.cart)
  }
  check(product: CartItem): any {
    for (let i = 0; i < this.cart.length; i++) {
      if (product.Specification.id == this.cart[i].Specification.id) {
        this.index = i
        return true
      }
    }
  }
}
