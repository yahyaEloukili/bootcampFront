import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from "./authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class ResourceServiceService {
  public host: string = "http://localhost:5000/api/v1";


  constructor(private http: HttpClient, private authenticateService: AuthenticateService) { }
  public getResource(resource, page, size) {
    return this.http.get(`${this.host}/${resource}?page=${page}&limit=${size}`);
  }
  public addResource(resource, post) {

    return this.http.post(`${this.host}/${resource}`, post, { headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") }) });
  }
  public getResourceById(resource, id) {
    return this.http.get(`${this.host}/${resource}/${id}`);
  }

  public getBootcampsByRadius(zipcode, distance) {
    return this.http.get(`${this.host}/bootcamps/radius/${zipcode}/${distance}`);
  }
}
