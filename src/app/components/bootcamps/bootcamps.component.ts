import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ResourceServiceService } from "../../services/resource-service.service";
@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.css']
})
export class BootcampsComponent implements OnInit {
  bootcamps: any[];
  page = 1;
  size = 2;
  totalPages: any;
  pages: Array<number>;
  miles;
  zipcode;
  noPagination: boolean;
  constructor(private resouceService: ResourceServiceService, private router: Router, private authenticateService: AuthenticateService) { }

  ngOnInit(): void {

    // this.resouceService.getResourceById("users", this.authenticateService.getLoggedInUser().id).subscribe(res => {
    //   console.log(res);
    // })
    if (localStorage.getItem("distance")) {
      this.findByLocation2(localStorage.getItem("zipcode"), localStorage.getItem("distance"))
    } else {
      this.getBootcamps();
    }

  }
  getBootcampDetail(id) {
    this.router.navigateByUrl(`bootcampDetail/${id}`);
  }
  getBootcamps() {
    this.resouceService.getResource("bootcamps", this.page, this.size).subscribe(resp => {
      this.noPagination = false;
      this.totalPages = resp["pagination"].totalPages;
      this.pages = new Array<number>(this.totalPages);

      this.bootcamps = resp["data"]
      console.log(this.bootcamps);
    }, err => {

    })

  }
  goToPage(i) {
    this.page = i;
    this.getBootcamps();
  }
  findByLocation(form: NgForm) {
    if (form.valid) {
      this.resouceService.getBootcampsByRadius(form.value.zipcode, form.value.distance).subscribe(resp => {
        this.noPagination = true;
        this.bootcamps = resp["data"]
      })

    }
  }
  findByLocation2(zipcode, distance) {

    this.resouceService.getBootcampsByRadius(zipcode, distance).subscribe(resp => {
      this.noPagination = true;
      this.bootcamps = resp["data"]
    })


  }
}
