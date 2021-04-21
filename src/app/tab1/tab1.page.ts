import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private _productService: ProductsService,
              private router: Router,
              private alert: AlertController,
              private toast: ToastController) {}

  product =
    {name: '', description: '', price: 0.00, img: ''}
  ;

  saveProduct() {

    this._productService.saveProduct(this.product).toPromise().then((result) => {
      this.product = result;
      this.showToast();
      this.router.navigate(['/tabs/tab2']);
    }).catch((err: HttpErrorResponse) => {
      this.showAlert(err.error.message);
    });
  }

  async showAlert(messageError: string){
    const alert = await this.alert.create({
      header: 'Error',
      message: messageError,
      buttons: ['ok']
    });

    await alert.present();
  }

  async showToast() {
    this.toast.create({
      message: 'Producto creado satisfactoriamente',
      duration: 5000
    });
  }
}
