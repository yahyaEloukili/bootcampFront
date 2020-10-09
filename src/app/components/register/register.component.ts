import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { User } from "../../models/User";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  }
  verify;
  emailError: boolean;
  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }
  submitForm(userForm: NgForm) {

    // this.user.roles_id = Array.from(String(userForm.value.roles_id));
    // console.log(userForm.value.roles_id);
    if (userForm.valid) {
      this.authenticateService.register(userForm.value).subscribe(resp => {
        this.emailError = false;
        this.verify = false;
        userForm.reset();
      }, err => {
        this.emailError = true;
        this.verify = false;
      })
    } else {
      this.verify = true;
      this.emailError = false;
    }
  }

}
