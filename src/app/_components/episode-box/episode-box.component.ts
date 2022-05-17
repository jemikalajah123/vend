import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-episode-box',
  templateUrl: './episode-box.component.html',
  styleUrls: ['./episode-box.component.css']
})
export class EpisodeBoxComponent implements OnInit {
  public episodes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEpisodes()
      .subscribe(data => {
        console.log(data)
        this.episodes = data
      })
  }

}
