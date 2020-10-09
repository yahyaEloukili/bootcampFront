import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  distance;
  zipcode;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick(form: NgForm) {

    this.router.navigateByUrl("bootcamps")
  }

}
