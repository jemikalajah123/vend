import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-episode-view',
  templateUrl: './episode-view.component.html',
  styleUrls: ['./episode-view.component.css']
})
export class EpisodeViewComponent implements OnInit {

  constructor(private dataService: DataService, private activatedRoute:ActivatedRoute) { }
  public episode: any

  ngOnInit(): void {
    this.episode = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    console.log(this.episode)
  }

  submitData(value: any, episodeId: number) {
    let body = {
      comment: value.comment,
      location: value.ip_address_location
    }
    this.dataService.postComment(body,episodeId)
      .subscribe(response => {
        console.log(response)
      })
  }
}
