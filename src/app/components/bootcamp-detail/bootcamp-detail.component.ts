import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-bootcamp-detail',
  templateUrl: './bootcamp-detail.component.html',
  styleUrls: ['./bootcamp-detail.component.css']
})
export class BootcampDetailComponent implements OnInit {
  bootcamp;
  constructor(private route: ActivatedRoute, private resourceService: ResourceServiceService, private router: Router) { }

  ngOnInit(): void {

    this.resourceService.getResourceById("bootcamps", this.route.snapshot.params["id"]).subscribe(resp => {
      this.bootcamp = resp["data"];
      console.log(this.bootcamp);
    })
    console.log(this.route.snapshot.params["id"]);
  }
  addReview() {
    this.router.navigateByUrl(`addReviews/${this.route.snapshot.params["id"]}`);
  }
  readReview() {
    this.router.navigateByUrl(`reviews/${this.route.snapshot.params["id"]}`);
  }

}
