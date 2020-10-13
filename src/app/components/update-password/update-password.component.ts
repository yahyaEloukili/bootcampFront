import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  myPassword;
  myConfirmPassword
  error;
  anyError;
  verify;
  constructor(private authenticateService: AuthenticateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  returnToReset() {
    this.router.navigateByUrl("/resetPassword");
  }
  updatePassword(form: NgForm) {
    console.log(form.value.password);
    if (form.valid) {
      this.authenticateService.updatePassword(form.value, this.route.snapshot.params.token).subscribe(res => {
        this.router.navigateByUrl("/login")
      }, err => {
        if (err.error.error === 'Invalid token') {
          this.error = true;
        } else {
          this.anyError = true;
        }
      })
    } else {
      this.verify = true;
    }
  }
}
