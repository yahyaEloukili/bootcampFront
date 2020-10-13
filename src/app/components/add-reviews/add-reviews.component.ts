import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResourceServiceService } from 'src/app/services/resource-service.service';
import { Review } from "../../models/Review";
@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {
  review: Review = {
    title: "",
    text: "",
    rating: "",
    bootcamp: ""
  }
  rating;
  constructor(private route: ActivatedRoute, private resourceService: ResourceServiceService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    // this.resourceService.getResourceById("bootcamps", this.route.snapshot.params.id).subscribe(res => {
    //   console.log(res);
    // })

  }

  addReview(form: NgForm) {
    form.value.rating = this.rating
    this.resourceService.addResourceToResource("bootcamps", this.route.snapshot.params.id, "reviews", form.value).subscribe(res => {
      console.log(res);
    })
  }
  setRating(ev) {
    this.rating = ev;
  }
}
