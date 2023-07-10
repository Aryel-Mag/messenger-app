import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';
import { ChatBannerComponent } from './chat-banner/chat-banner.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { WriterComponent } from './writer/writer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBannerComponent,
    ChatBannerComponent,
    ChatMainComponent,
    ChatListComponent,
    WriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
