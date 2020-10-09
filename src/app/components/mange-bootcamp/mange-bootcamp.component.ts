import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mange-bootcamp',
  templateUrl: './mange-bootcamp.component.html',
  styleUrls: ['./mange-bootcamp.component.css']
})
export class MangeBootcampComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  manageCourses() {
    this.router.navigateByUrl('manageCourses/1');
  }

}
