import { Injectable } from "@angular/core";
import { variables } from "../../configs/variables";

const Token_Key = variables.auth_TokenKey;
const User_Key = variables.auth_UserKey;

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear()
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(Token_Key);
    window.sessionStorage.setItem(Token_Key, token);
  }

  public getToken() : string | null {
    return  window.sessionStorage.getItem(Token_Key);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(User_Key);
    window.sessionStorage.setItem(User_Key, user);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(User_Key);
    if (user) {
      return JSON.parse(user);  
    }
    return {};
  }
}
