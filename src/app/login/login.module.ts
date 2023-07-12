import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login-page/components/login.component';

import { LoginRoutingModule } from './login-routing.module';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule
  ]
})
export class LoginModule { }
