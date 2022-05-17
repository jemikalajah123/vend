import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/data.service';
import { ActivatedRoute, Router } from '@angular/router'
import { AlertService } from '../../_services/alert.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-episode-view',
  templateUrl: './episode-view.component.html',
  styleUrls: ['./episode-view.component.css']
})
export class EpisodeViewComponent implements OnInit {

  constructor(private alertService: AlertService, private dataService: DataService, private activatedRoute:ActivatedRoute,  private router:Router) { }
  destroy$: Subject<boolean> = new Subject<boolean>()
  public episode: any
  public episodeId: any
  public comment: any 

  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.episodeId = params['id'];
      this.dataService.getEpisode(this.episodeId).pipe(takeUntil(this.destroy$)).subscribe((data: any) => {
        this.episode = data;
    });
    });
    console.log(this.episode)

  }

  submitData(value: any, episodeId: number) {
    let body = {
      comment: this.comment,
      ip_address_location: (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))
    }
    console.log
    this.dataService.postComment(body,episodeId)
      .subscribe(() => {
        this.router.navigate(['/episode/'+episodeId]).then(() => {
          window.location.reload();
        });
        this.alertService.success('Logged In successfully, Welcome!', this.options)
      })
  }
}
