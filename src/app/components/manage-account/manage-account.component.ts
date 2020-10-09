import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  updatePassword() {
    this.router.navigateByUrl("updatePassword")
  }
}
