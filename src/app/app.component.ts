import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
import { variables } from '../configs/variables';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title? : string = variables.title;
  username?: string;
  private roles: string[] = [];
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log(this.roles);
      this.username = user.username;
    }
  }

  logOut(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
