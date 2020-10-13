import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ResourceServiceService } from 'src/app/services/resource-service.service';
import { Course } from "../../models/course";
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course = {
    title: "",
    description: "",
    weeks: "",
    tuition: "",
    minimumSkill: "",
    scholarhipsAvailable: "",
    bootcamp: "",
    user: ""

  }
  constructor(private router: ActivatedRoute, private resourceService: ResourceServiceService, private authenticateService: AuthenticateService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);


  }
  addCourse(form: NgForm) {
    form.value.bootcamp = this.router.snapshot.params.id;
    form.value.user = this.authenticateService.getLoggedInUser().id;
    console.log(form.value);
    if (form.valid) {
      this.resourceService.addResourceToResource("bootcamps", this.router.snapshot.params.id, "courses", form.value).subscribe(res => {
        console.log(res);
      })
    }

  }

}
