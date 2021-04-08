import { Component, OnInit } from '@angular/core';
import { CatgeoryService } from '../services/catgeory.service';
import { Category } from '../common/category';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories :Category[];
  products: Product[];
  constructor(private catgeoryService :CatgeoryService, private activatedRoutes: ActivatedRoute,private productService: ProductService) { }
  categoryResourceId: number;
  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe(()=>{
      this.getCategoryList();
    });
   
  }
  getCategoryList(){
    const hasCategoryId: boolean=this.activatedRoutes.snapshot.paramMap.has('categoryId');
   // this.categoryResourceId  =+this.activatedRoutes.snapshot.paramMap.get();
    this.catgeoryService.getCategoryList().subscribe(
      data => {
      this.categories=data;
    })
  }
  productsByCategory(category: any){
    const categoryId = +this.activatedRoutes.snapshot.paramMap.get(category.categoryId);
    this.productService.getProdsByCatId(category.categoryId).subscribe(data=>{
        this.products=data;
        
    })
  }
}
