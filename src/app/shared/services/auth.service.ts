import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute
  ) { 
    this.user$ = afAuth.authState;
    // console.log(this.user$);
  }

  login(pancho) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/pollGloballogic';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  singOut() {
    this.afAuth.auth.signOut();
  }
  
}
