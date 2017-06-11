
import { Injectable } from '@angular/core'; 
import { Http }          from '@angular/http';
import { Hero } from './hero';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService{
  private heroesUrl = 'http://localhost:3000/api/genres';

  constructor(private http: Http) { }

  getHeroes(): Promise<any>{
      /*return this.http.get(this.heroesUrl)
        .toPromise().then(resp=>console.log(resp));*/
        return this.http.get(this.heroesUrl)
        .toPromise()
               .then()
               .catch(this.handleError);
  }

  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }    
}