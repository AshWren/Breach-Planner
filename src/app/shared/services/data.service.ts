import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class DataService {



  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('./assets/data/about.json')
      .map((res: Response) => res.json());
  }

}
