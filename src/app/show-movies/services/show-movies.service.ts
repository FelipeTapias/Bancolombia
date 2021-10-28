import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowMoviesService {

  constructor(private http: HttpClient) {

  }

  getAllFilms(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/films').pipe(
      map(response => {
        return response.results
      })
    )
  }

}
