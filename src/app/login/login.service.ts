import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _user: string;

  public get authUsr() {
    return this._user;
  }

  constructor(private auth: AngularFireAuth) { }

  login(): Promise<any> {
    this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      resp => {
        this._user = resp.user.displayName;
      }
    );
  }
}
