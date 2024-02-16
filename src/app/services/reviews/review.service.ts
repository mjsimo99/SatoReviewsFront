import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/models/Review';
import { API_URLS } from 'src/app/shared/config/API_URLS';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]>{
    return this.http.get<Review[]>(API_URLS.Reviews_URL).pipe(
      tap(reviews => console.log('Données récupérées depuis le service:', reviews))
    );
  }


}
