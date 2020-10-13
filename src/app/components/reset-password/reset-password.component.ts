import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  myEmail;
  verify;
  success;
  constructor(private authenticateService: AuthenticateService, private router: Router, private resourceService: ResourceServiceService) { }

  ngOnInit(): void {

  }
  goToLogin() {
    this.router.navigateByUrl("/login");
  }
  returnToLogin() {
    this.router.navigateByUrl("/login")
  }
  submitForm(form: NgForm) {
    form.value.request = this.resourceService.hostClient;
    if (form.valid) {
      this.verify = false;
      this.authenticateService.resetPassword(form.value).subscribe(res => {
        this.success = true;
        form.reset();
      }, err => {
        console.log(err);
      })
    } else {
      this.verify = true;
    }
  }

}
