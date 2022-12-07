import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();
  constructor(private cartService: CartService,private formBuilder:FormBuilder) { }
  form = this.formBuilder.group({
    name: '',
    address:''
  })
  onSubmit() {
    window.alert("Your order has been placed")
    console.log(this.form.value)
    this.cartService.clearCart()
    this.form.reset()
  }
}
