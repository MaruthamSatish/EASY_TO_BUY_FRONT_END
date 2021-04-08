import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../common/product';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: Product[];
  constructor(private productService:ProductService,private activatedRoutes: ActivatedRoute,private route:Router) { }
 ngOnInit(): void {
 
  this.productsByCategory(this.activatedRoutes.snapshot.paramMap.get('categoryId'));
 
  }
  getProductList(){
    this.productService.getProductList().subscribe(
      data => {
      this.products=data;
      console.log("ProductGrid::"+this.products);
    })
  }

  productsByCategory(categoryId): void {
    this.productService.getProdsByCatId(categoryId)
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
