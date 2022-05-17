import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private baseURL = `https://vendmw.herokuapp.com/api`

  getEpisodes(): Observable<any> {
    return this.http.get(`${this.baseURL}/list`)
  }
  getEpisode(episodeId:number): Observable<any> {
    return this.http.get(`${this.baseURL}/episodes/${episodeId}`)
  }

 postComment(data: any, episodeId: number): Observable<any> {
  return this.http.post(`${this.baseURL}/episodes/${episodeId}/comment`, data)
 }

}
