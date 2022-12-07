import { CartService } from '../cart.service';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  product?: Product;
  constructor(private route: ActivatedRoute,private cartService:CartService) { }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Added to cart');
  }
  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'))
    this.product = products.find(p => p.id === productId);
  }
}
