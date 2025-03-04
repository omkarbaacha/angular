import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
 
  constructor(private _auth:AuthService,private _router:Router){ }

  canActivate() : any {
    if(this._auth.loggedIn()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    }
  }
}
