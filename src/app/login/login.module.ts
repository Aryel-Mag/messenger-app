import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login-page/components/login.component';

import { LoginRoutingModule } from './login-routing.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatIconModule
    ]
})
export class LoginModule { }
