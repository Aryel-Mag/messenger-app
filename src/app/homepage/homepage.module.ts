import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent} from './homepage/homepage.component';

import { HomepageRoutingModule} from './homepage-routing.module';
import {WriterComponent} from "./homepage/components/writer/writer.component";
import {RoomComponent} from "./homepage/components/room/room.component";
import {ChatMainComponent} from "./homepage/components/chat-main/chat-main.component";
import {ChatListComponent} from "./homepage/components/chat-list/chat-list.component";
import {ChatBannerComponent} from "./homepage/components/chat-banner/chat-banner.component";
import {ProfileBannerComponent} from "./homepage/components/profile-banner/profile-banner.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
@NgModule({
  declarations: [
    HomepageComponent,
    ProfileBannerComponent,
    ChatBannerComponent,
    ChatMainComponent,
    ChatListComponent,
    WriterComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class HomepageModule { }
