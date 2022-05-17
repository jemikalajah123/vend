import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesViewComponent } from './_screens/episodes-view/episodes-view.component';
import { EpisodeViewComponent } from './_screens/episode-view/episode-view.component';

const routes: Routes = [
  { path: '', component: EpisodesViewComponent },
  { path: 'episode/:id', component: EpisodeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
