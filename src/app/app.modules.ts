import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutes } from "./app.routes";
import { LoginComponent } from "./login/login.component";
import { LandingPageComponent } from "./landingpage/landingpage.component";
import { authInterceptorProviders } from "./_interceptor/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModules { }
