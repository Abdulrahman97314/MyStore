import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Product } from "../../model/product";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cart: Product[] = []
  constructor(private _CartService: CartService) { }
  ngOnInit(): void {
    this._CartService.cartList.subscribe({
      next: (res:Product[]) => {
        this.cart = res
      },
    }
    )
  }
}
