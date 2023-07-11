import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileBannerComponent } from './components/profile-banner/profile-banner.component';
import { ChatBannerComponent } from './components/chat-banner/chat-banner.component';
import { ChatMainComponent } from './components/chat-main/chat-main.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { WriterComponent } from './components/writer/writer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RoomComponent } from './components/room/room.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileBannerComponent,
    ChatBannerComponent,
    ChatMainComponent,
    ChatListComponent,
    WriterComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
