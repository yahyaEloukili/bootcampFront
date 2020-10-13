import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/Review';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-review.component.html',
  styleUrls: ['./update-review.component.css']
})
export class UpdateReviewComponent implements OnInit {
  review: Review = {
    title: "",
    text: "",
    rating: "",
    bootcamp: ""
  }
  rating;
  constructor(private resourceService: ResourceServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resourceService.getResourceById("reviews", this.route.snapshot.params.id).subscribe(res => {
      console.log(res["data"]);
      this.review.title = res["data"].title;
      this.review.text = res["data"].text;
      this.review.rating = res["data"].rating;
      this.review.bootcamp = res["data"].bootcamp._id;
    })
  }
  updateReview(form: NgForm) {
    if (form.valid) {
      this.resourceService.updateResource("reviews", this.route.snapshot.params.id, form.value).subscribe(res => {
        console.log(res);
      })
    }
  }
  setRating(ev) {
    this.rating = ev;
  }
}
