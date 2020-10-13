import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews;
  rating;
  constructor(private resourceService: ResourceServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.resourceService.getResourceOfResource("bootcamps", this.route.snapshot.params.id, "reviews").subscribe(res => {
      this.reviews = res["data"]

    })
    this.resourceService.getResourceById("bootcamps", this.route.snapshot.params.id).subscribe(res => {
      this.rating = res["data"].averageRating;
    })


  }
  showBootcamp() {
    this.router.navigateByUrl(`bootcampDetail/${this.route.snapshot.params.id}`);
  }
}
