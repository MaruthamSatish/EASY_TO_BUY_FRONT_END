import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products: Product[];
   productsById: Product[];
   
  constructor(private  activatedRoutes: ActivatedRoute,private productService: ProductService) { }
  
  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe(()=>{
      this.getProductList();
    });
    this.getProductById(this.activatedRoutes.snapshot.paramMap.get('productId')); 
  }
  getProductList(){
    this.productService.getProductList().subscribe(
      data => {
      this.products=data;
    })
  }

getProductById(productId): void {
  console.log("ProductId::"+productId)
  this.productService.getProductById(productId)
    .subscribe(
      data => {
        this.productsById = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
  }

