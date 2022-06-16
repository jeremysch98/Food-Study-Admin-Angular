import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  validateUser(email: string, password: string): Observable<any> {
    const uri = environment.pathServices.concat("administrator/login");
    return this.http.post<any>(uri, {email, password});
  }

}
