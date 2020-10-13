import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {
  courses: any;
  bootcamp: any;

  constructor(private router: Router, private route: ActivatedRoute, private resourceService: ResourceServiceService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.resourceService.getResourceOfResource("bootcamps", this.route.snapshot.params.id, "courses").subscribe(res => {
      this.courses = res["data"];
    })
    this.resourceService.getResourceById("bootcamps", this.route.snapshot.params.id).subscribe(resp => {
      this.bootcamp = resp["data"];
      console.log(this.bootcamp);
    })

  }
  manageBootcamp() {
    this.router.navigateByUrl("manageBootcamp/1");
  }
  addCourse() {
    this.router.navigateByUrl(`addCourse/${this.route.snapshot.params.id}`);
  }
}
