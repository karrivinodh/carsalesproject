import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Car } from 'src/model/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
baseurl="http://localhost:25280/api/Cars/";
  constructor(private http:HttpClient ) {}
  AddcarDetails(car:Car){
    let url = this.baseurl+'postcar';
    return this.http.post(url,car,{ responseType: 'text' });
  }
}
