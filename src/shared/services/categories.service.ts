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
        .set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA5YzBhMTBjNzkyMGNkYzVhNDhiOTMiLCJpYXQiOjE3MTkxMDQ5MTYsImV4cCI6MTcxOTE5MTMxNn0.5ulzniBB7K4clLm_Kwu10UiP_mdKjTefclri4zQ7_S0`)
    }

    return this.httpClient.get(this.webURL, header).pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    return throwError(() => err.error.message);
  }
}
