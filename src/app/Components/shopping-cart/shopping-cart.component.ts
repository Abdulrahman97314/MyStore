import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from "../../model/product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  paymentForm = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    address: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
    cardNumber: new FormControl(null, [Validators.required, Validators.pattern(/^(?:\d[ -]*?){16}$/)])
  })
  cart: any = []
  quantity: number[] = []
  totalPrice: number = 0
  success: boolean = false
  constructor(private _CartService: CartService, private _Router: Router) { }
  submit() {
    if (this.paymentForm.status == 'VALID') {
      let paymentData = {
        totalPrice: this.totalPrice,
        name: this.paymentForm.value.fullName
      }
      localStorage.setItem("paymentData", JSON.stringify(paymentData))
      this._Router.navigate(['/OrderConfirmation'])
    }
  }
  ngOnInit(): void {
    this.getCartList()
    this.TotalPrice()
    for (let i = 1; i <= 10; i++) {
      this.quantity.push(i)
    }
  }
  getCartList(){
    this._CartService.cartList.subscribe({
      next: () => { 
        this.cart = this._CartService.cartList.getValue()
      },
    })
  }
   Delete(i: number) {
    this.cart.splice(i, 1)
    localStorage.setItem("cartList", JSON.stringify(this.cart))
    this._CartService.updateCartList()
    this.TotalPrice()
    alert("This item has been removed")
  }
  change(quantity:number,item: Product, i: number) {
    let cartList = {
      quantity: Number(quantity),
      Specification: item
    }
    this.cart.splice(i, 1, cartList)
    localStorage.setItem("cartList", JSON.stringify(this.cart))
    this._CartService.updateCartList()
    this.TotalPrice()
  }
  TotalPrice() {
    this.totalPrice = 0
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrice += this.cart[i].Specification.price * this.cart[i].quantity
    }
  }

}
