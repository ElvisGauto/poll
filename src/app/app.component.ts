import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$;
  showSpinner = false;
  
  constructor(
    private auth: AuthService, 
    private router: Router, 
    private userService: UserService,
    private spinner: SpinnerService
    ) {
  }

  ngOnInit() {
    this.spinner.spinnerObservable()
    .subscribe( res => {
      this.showSpinner = res;
    });

    this.auth.user$.subscribe(user => {
      if (user) {
        this.userService.saveUser(user);

        let returnUrl = localStorage.getItem('returnUrl');
        localStorage.removeItem('returnUrl');
        if (returnUrl) {
          this.router.navigateByUrl(returnUrl);
        }
      }
    });
  }
}
