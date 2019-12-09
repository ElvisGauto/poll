import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { MaterialModule } from '../shared/modules/material/material.module'
import { HeaderComponent } from './components/header/header.component';

import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    FormsModule
  ]
})
export class SharedModule { }
