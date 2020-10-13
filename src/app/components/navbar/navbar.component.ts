import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role
  constructor(public authenticateService: AuthenticateService, private resourceService: ResourceServiceService) { }

  ngOnInit(): void {
    // if (this.authenticateService.isUserLoggedIn()) {
    //   this.resourceService.getResourceById("users", this.authenticateService.getLoggedInUser().id).subscribe(res => {
    //     this.role = res["data"].role;

    //   })
    // }
    if (this.authenticateService.isUserLoggedIn()) {
      this.authenticateService.getMe().subscribe(res => {
        this.role = res["data"].role;
        console.log(this.role);
      })
    }
  }
  onLogout() {
    this.authenticateService.logout();
  }

}
