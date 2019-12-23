import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  pancho: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { 
    
  }

  start() {
    this.authService.login('se logeo');
    // this.pancho = true;
  }
}
