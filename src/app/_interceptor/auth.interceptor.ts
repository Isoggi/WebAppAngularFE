import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { variables } from "../../configs/variables";
import { TokenStorageService } from "../_services/token-storage.service";

const Token_Header_Key = variables.auth_TokenHeaderKey;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token) {
      authReq = req.clone({ headers: req.headers.set(Token_Header_Key, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [{
  provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
}]
