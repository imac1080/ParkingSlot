import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest, HttpResponse, HttpEvent, HttpEventType } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  test () {
    console.log("TEST");
  }

  login (username, password): Observable<any> {
    console.log("LOGIN");
    /*return this.http.post('http://localhost:3000/user/login', JSON.stringify({username, password}), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    }).pipe(map((response: Response) => {
     console.log("GILIPOLLAS");
    }));*/
    return this.http.post<any>('http://localhost:3000/user/login', JSON.stringify(this.loginMap(username, password)), {
     headers: this.getHeaders(false)
    }).pipe(map((data: any) => {
      console.log("DATA");
      //localStorage.setItem('token', data.token);
      console.log(data);
    }))
    /*return this.http.post('http://localhost:3000/user/login', JSON.stringify(this.loginMap(username, password))
    ).pipe(
      tap(token => {
        console.log(token);
      }),
    );*/
  }

  private getHeaders(login, multipart?) {
    var token = localStorage.getItem('token');
    if(login) {
      if(multipart) {
        return new HttpHeaders().set('Authorization', token);
      }else {
        return new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);
      }
    }else {
      return new HttpHeaders().set('Content-Type', 'application/json')
    }
  }

  // MAP

  loginMap (username, password){
    console.log(username + " " + password);

    return {
      "username": username,
      "password": password
    }
  }
}
