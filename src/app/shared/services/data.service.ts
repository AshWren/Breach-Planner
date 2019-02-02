import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';





@Injectable({
  providedIn: 'root'
})

export class DataService {



  constructor(private http: HttpClient) { 
      this.getData().subscribe(data => {
          console.log(data)
      });
  }

  getData(): Observable<any> {
      return this.http.get('../../../assets/data/data.json')
  }

  getDataPromise(): any {
    return this.http.get('../../../assets/data/data.json').toPromise();
  }


//   getCurrentClass(slug: string): Observable<Data>{
//       return of(DATA.find(data => data.slug === slug))
//   }
//   getHero(id: number): Observable<Hero> {
//     // TODO: send the message _after_ fetching the hero
//     this.messageService.add(`HeroService: fetched hero id=${id}`);
//     return of(HEROES.find(hero => hero.id === id));
//   }
  
  // getData(){
  //   return this.http.get('./assets/data/about.json')
  //     map((res: Response) => res.json());
  // }

}
