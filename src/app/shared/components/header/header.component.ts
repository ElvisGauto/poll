import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('flag') flag;

  user$;

  isAdmin: boolean;
  uid: string;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.uid = user.uid;
        this.user$ = this.userService.getUser(this.uid);
      }
    })
  }

  singOut() {
    this.auth.singOut();
    
    this.router.navigate(['/login']);
  }


  redirectList() {
    this.router.navigate(['/listPolls']);
  }

  redirectPoll() {
    this.router.navigate(['/pollCocaCola']);
  }
}
