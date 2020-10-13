import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-mange-bootcamp',
  templateUrl: './mange-bootcamp.component.html',
  styleUrls: ['./mange-bootcamp.component.css']
})
export class MangeBootcampComponent implements OnInit {
  count: any;
  ok: boolean;
  bootcamps;
  role;
  selectedFiles: any;
  progress: number;
  timestamp: number = 1234;
  currentFileUploaded: any;
  constructor(private router: Router, private resourceService: ResourceServiceService, private authenticateService: AuthenticateService) { }

  ngOnInit(): void {

    this.resourceService.getResourceOfResource2("bootcamps", "user", this.authenticateService.getLoggedInUser().id).subscribe(res => {
      this.bootcamps = res["data"]
      console.log(this.bootcamps);
      this.ok = true;
      this.count = res["count"]
    })

  }
  addBootcamp() {
    this.router.navigateByUrl("addBootcamp")
  }
  manageCourses(bootcampId) {
    this.router.navigateByUrl(`manageCourses/${bootcampId}`);

  }
  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);

  }
  uploadPhoto(bootcampId) {
    this.progress = 0;

    this.currentFileUploaded = this.selectedFiles?.item(0);
    this.resourceService.uploadPhoto(this.currentFileUploaded, bootcampId).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);


      } else if (event instanceof HttpResponse) {
        this.timestamp = Date.now();


      }

    }, err => {
      alert("probleme de chargement");
    })
  }
  removeBootcamp(id) {
    if (confirm("are you sure of deleting this bootcamp")) {
      this.resourceService.deleteResource("bootcamps", id).subscribe(res => {
        console.log(res);
      })
    }
  }
}
