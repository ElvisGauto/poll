import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { MaterialModule } from '../shared/modules/material/material.module'

import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    FormsModule
  ]
})
export class SharedModule { }
