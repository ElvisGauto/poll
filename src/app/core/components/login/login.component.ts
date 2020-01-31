import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  pancho = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private spinner: SpinnerService
  ) {
    this.spinner.showSpinner();

    this.authService.user$.subscribe( user => {
      this.spinner.hideSpinner();
    });
  }

  start() {
    this.authService.login('se logeo');
    // this.pancho = true;
  }
}
