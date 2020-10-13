import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-manage-reviews',
  templateUrl: './manage-reviews.component.html',
  styleUrls: ['./manage-reviews.component.css']
})
export class ManageReviewsComponent implements OnInit {
  reviews;
  constructor(private resourceService: ResourceServiceService, private authenticateService: AuthenticateService, private router: Router) { }

  ngOnInit(): void {
    this.getReviews();
  }
  getReviews() {
    this.resourceService.getResourceOfResource2("reviews", "user", this.authenticateService.getLoggedInUser().id).subscribe(res => {
      this.reviews = res["data"];
      console.log(this.reviews);
    })

  }
  deleteReview(id) {
    if (confirm('are you sure to delete this review')) {
      this.resourceService.deleteResource("reviews", id).subscribe(res => {
        this.getReviews();
      })
    }
  }
  updateReview(id) {
    this.router.navigateByUrl(`/updateReview/${id}`)
  }
}
