import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../tab1/products.service';
import { Product } from '../interfaces/product.Interface';
import { LoginService } from '../login/login.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  products: Product[] = [];
  termino: string = '';
  username: string;

  constructor(private _productService: ProductsService, private loginService: LoginService) {}

  ngOnInit() {
    if (this.loginService.authUsr) {
    
      const usernameArray: string[] = this.loginService.authUsr.split(' ');
      this.username = usernameArray[0];
    } else {
      console.log("error");
    }

    this._productService.getProducts().subscribe(resp => {
      this.products = resp;
    });
  }

  addCart(id: string) {
    console.log(id);
  }

  searchProduct(event) {
    console.log(event.detail.value);
  }
}
