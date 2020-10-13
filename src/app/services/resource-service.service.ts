import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateService } from "./authenticate.service";

@Injectable({
  providedIn: 'root'
})
export class ResourceServiceService {
  public host: string = "http://localhost:5000/api/v1";
  public hostClient: string = "http://localhost:4200";


  constructor(private http: HttpClient, private authenticateService: AuthenticateService) { }
  public getResource(resource, page, size) {
    return this.http.get(`${this.host}/${resource}?page=${page}&limit=${size}`);
  }
  public getResourceOfResource(resource1, id, resource2) {
    return this.http.get(`${this.host}/${resource1}/${id}/${resource2}`);
  }
  public getResourceOfResource2(resource1, resource2, id) {
    return this.http.get(`${this.host}/${resource1}?${resource2}=${id}`);
  }
  public deleteResource(resource, id) {
    return this.http.delete(`${this.host}/${resource}/${id}`, { headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") }) });
  }
  public updateResource(resource, id, form) {
    return this.http.put(`${this.host}/${resource}/${id}`, form, { headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") }) });
  }
  public addResource(resource, post) {

    return this.http.post(`${this.host}/${resource}`, post, { headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") }) });
  }

  public addResourceToResource(resource1, id, resource2, post) {

    return this.http.post(`${this.host}/${resource1}/${id}/${resource2}`, post, { headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") }) });
  }
  public getResourceById(resource, id) {
    return this.http.get(`${this.host}/${resource}/${id}`, { headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") }) });
  }

  public getBootcampsByRadius(zipcode, distance) {
    return this.http.get(`${this.host}/bootcamps/radius/${zipcode}/${distance}`);
  }
  //api/v1/bootcamps/:id/photo
  public uploadPhoto(currentFileUploaded: any, id) {
    let formData: FormData = new FormData();
    formData.append('file', currentFileUploaded);
    const req = new HttpRequest('PUT', this.host + '/bootcamps/' + id + '/photo', formData, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders({ 'authorization': localStorage.getItem("token") })
    })
    return this.http.request(req);
  }
}
