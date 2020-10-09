import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  manageBootcamp() {
    this.router.navigateByUrl("manageBootcamp/1");
  }
  addCourse() {
    this.router.navigateByUrl("addCourse");
  }
}
