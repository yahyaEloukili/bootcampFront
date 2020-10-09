import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResourceServiceService } from 'src/app/services/resource-service.service';
import { Bootcamp } from "../../models/Bootcamp";
@Component({
  selector: 'app-add-bootcamp',
  templateUrl: './add-bootcamp.component.html',
  styleUrls: ['./add-bootcamp.component.css']
})
export class AddBootcampComponent implements OnInit {
  bootcamp: Bootcamp = {
    name: "",
    description: "",
    website: "",
    phone: "",
    email: "",
    address: "",
    careers: [""],
    housing: false,
    jobAssistance: false,
    jobGuarantee: false,
    acceptGi: false
  }
  constructor(private resourceService: ResourceServiceService) {

  }
  submitForm(form: NgForm) {
    if (form.valid) {
      this.resourceService.addResource("bootcamps", form.value).subscribe(resp => {
        console.log(resp);
      })
    }
  }
  ngOnInit(): void {
  }

}
