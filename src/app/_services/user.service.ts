import { Injectable } from "@angular/core";
import { variables } from "../../configs/variables";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_Url = variables.auth_UserEndpoint;

@Injectable
  ({
    providedIn: 'root'
  })
export class UserService {
  constructor(private http: HttpClient) { }

  getUserDetail(): Observable<any> {
    return this.http.get(API_Url + '/Get', {responseType: 'text'})
  }
}
