import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { switchMap } from 'rxjs/operators';
import { AppUser } from './appuser';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(private userService: UserService, private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$=afAuth.authState;
   }
    login() {
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')||'/';
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      localStorage.setItem('returnUrl',returnUrl);
    }
    logout(){
      this.afAuth.auth.signOut();
    }
    get appUser$() :Observable<AppUser>{
      return this.user$
    .pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid);
      return of(null);
      
    }));

    }
}
