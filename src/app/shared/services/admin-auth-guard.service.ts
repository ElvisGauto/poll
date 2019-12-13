import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardServic {

  constructor(
    private auth: AuthService,
    private userService: UserService
  ) { }

  // canActivate() {
  //   return this.auth.user$.subscribe(x => {

  //   })
  // }
}
