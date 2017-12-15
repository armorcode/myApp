import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AfService } from '../services/af.service';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fire-test',
  templateUrl: './fire-test.component.html',
  styleUrls: ['./fire-test.component.css']
})
export class FireTestComponent implements OnInit {

  afList: any;
  testVal: String = "coucou";
  //List observée pour afficher les MAJ
  afListObs: Observable<any[]>;

  // Variables pour l'authenfication
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(public afAuth: AngularFireAuth, afDB: AngularFireDatabase, public af: AfService,private router: Router) {
    //Récupération de l'objet liste
    this.afList = afDB.list('items');
    //Récupération de la liste modifiée
    this.afListObs = afDB.list('items').valueChanges();

  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  addItem() {
    //Ajout d'élément à la liste
    this.afList.push({ name: this.testVal });
    console.log(this.afListObs);
  }

  ngOnInit() {
  }

  onSignUp(): void {
    if (this.validateForm(this.email, this.password)) {
      console.log('signup component');
      
      this.af.signUpWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/gallery'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }
 
  onLoginEmail(): void {
    if (this.validateForm(this.email, this.password)) {
      this.af.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/gallery']))
        .catch(_error => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }
 
  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false
    }
 
    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false
    }
 
    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!'
      return false
    }
 
    this.errorMessage = ''
 
    return true
  }

}
