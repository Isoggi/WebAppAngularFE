import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { variables } from '../../configs/variables'
import { Observable } from 'rxjs';
const Auth_API = variables.auth_Endpoint;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(Auth_API + '/login', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post(Auth_API + '/register', {
      username,
      password,
      email,
    }, httpOptions);
  }
}
