import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    if (this.loginService.authUsr || localStorage.getItem('sesssionId')) {
      this.router.navigate(['/tabs/tab2']);
    } else {
      console.log('error');
    }
  }

  login() {
    this.loginService.login().then(
    resp => {
      this.router.navigate(['/tabs/tab2']);
    }).catch(err => {
      console.log(err);
      this.showAlert();
    });
  }

  async showAlert() {
    const alert = await this.toastController.create({
      header: 'Error',
      message: 'No se ha completado el inicio de sesión',
      duration: 4000
    });
    await alert.present();
  }

}
