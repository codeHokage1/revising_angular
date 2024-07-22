import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from '../../types';
import { ProductComponent } from "../components/product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private productService: ProductServiceService
  ) { }

  products: Product[] = [];
  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products.items;
    });

  }
}
