import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from "../../model/product";
import { CartItem } from "../../model/cart-item";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private _CartService: CartService) { }
  @Input() product!: Product
  @Output() msg = new EventEmitter()
  add: boolean = false
  number: number = 1
  Quantity: number[] = []
  cartItem: CartItem ={
    Specification: {
      id: 0,
      name: '',
      price: 0,
      description: '',
      url: ''
    },
    quantity: 0
  }

  addedQuantity(number: number): void {
    this.number = number
  }
  AddToCart(product: Product) {
    this.cartItem = {
      quantity: Number(this.number),
      Specification: product
    }
    this._CartService.addToCart(this.cartItem)
    this.msg.emit()
  }
  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.Quantity.push(i)
    }
  }
}
