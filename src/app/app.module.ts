import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LoginModule} from "./login/login.module";
import {HomepageModule} from "./homepage/homepage.module";
import {NotFoundModule} from "./not-found/not-found.module";

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { messagesReducers } from "./store/messages/messages.reducers";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {MessageEffects} from "./store/messages/messages.effects";
import {UsersActions} from "./store/users/users.actions";
import {userReducers} from "./store/users/users.reducers";
import {UsersEffects} from "./store/users/users.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HomepageModule,
    NotFoundModule,
    HttpClientModule,
    StoreModule.forRoot({ message: messagesReducers, user: userReducers }),
    EffectsModule.forRoot([MessageEffects, UsersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
