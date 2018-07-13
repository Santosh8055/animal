import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': 'my-auth-token'
	})
};

@Injectable({
	providedIn: 'root'
})
export class DataService {
	// configUrl = "http://13.127.118.40:8080/sheep-management/v1.0/sheep?tag=30003088F67E"
	configUrl = 'https://api.myjson.com/bins/pnwny';
	postHealthUrl = 'http://13.127.118.40:8080/sheep-management/v1.0/health';

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	};

	constructor(private http: HttpClient) { }
	getSheepByRfid() {
		return this.http.get(this.configUrl);
	}
	postHealth(data: any): Observable<any> {
		return this.http.post<any>(this.postHealthUrl, data, httpOptions)
			.pipe(
				catchError(this.handleError)
			);
	}
}
