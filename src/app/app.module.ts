import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './_components/header/header.component';
import { EpisodeBoxComponent } from './_components/episode-box/episode-box.component';
import { EpisodesViewComponent } from './_screens/episodes-view/episodes-view.component';
import { EpisodeViewComponent } from './_screens/episode-view/episode-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EpisodeBoxComponent,
    EpisodesViewComponent,
    EpisodeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,EpisodeBoxComponent,EpisodesViewComponent,EpisodeViewComponent]
})
export class AppModule { }
