import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../tab1/products.service';
import { switchMap } from "rxjs/operators";
import { Product } from '../interfaces/product.Interface';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  product: Product;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.productService.getProduct(id))).subscribe(product => {
        this.product = product;
        
      });
  }

}
