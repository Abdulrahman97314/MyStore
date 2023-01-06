import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {
name:string=""
totalPrice:number=0
  constructor() { }

  ngOnInit(): void {
  let paymentData=JSON.parse(localStorage.getItem('paymentData')!)
  this.name=paymentData.name
  this.totalPrice=paymentData.totalPrice
  }

}
