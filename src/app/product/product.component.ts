import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products: Product[];
  constructor(private  activatedRoutes: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe(()=>{
      this.getProductList();
    });
  }
  getProductList(){
    this.productService.getProductList().subscribe(
      data => {
      this.products=data;
    })
  }
}
