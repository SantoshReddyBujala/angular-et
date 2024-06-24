import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private webURL = "http://localhost:3600/categories/"

  constructor(private httpClient: HttpClient) { }
  getCategories(): Observable<any> {
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5YzBhMTBjNzkyMGNkYzVhNDhiOTMiLCJpYXQiOjE3MTkxNTAyNTUsImV4cCI6MTcxOTIzNjY1NX0.XZorApjgUlPd8LkGBUWChq-CeDQOVbWQ4-xfk7W45dU`)
    }

    return this.httpClient.get(this.webURL, header).pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    return throwError(() => err.error.message);
  }
}
