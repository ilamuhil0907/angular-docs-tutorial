import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.css']
})
export class ShippingComponent {
  constructor(private cartService: CartService) {}
  shippingCosts!: Observable<{ type: string, price: number }[]> 
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
