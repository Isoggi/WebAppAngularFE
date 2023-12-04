import { Component, OnInit } from "@angular/core";
import { variables } from "../../configs/variables";
import { TokenStorageService } from "../_services/token-storage.service";
Component({
  selector: 'app-home',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent implements OnInit{
  title?: string = variables.title;
  bumper?: string = 'Hi!';
  constructor(private tokenStorage: TokenStorageService) { };

  ngOnInit(): void {
    if (!this.tokenStorage.getToken()) {
      this.tokenStorage.getUser();
    }
  }

}
