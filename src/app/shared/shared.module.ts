import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService
  ]
})
export class SharedModule { }
