import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  postData(data: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    /*return this.http.post("https://angularudemi.firebaseio.com/data.json",data,
      { headers : headers });*/
    return this.http.put("https://angularudemi.firebaseio.com/data.json", data,
      {headers: headers});
  }

  getData() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get("https://angularudemi.firebaseio.com/data.json",
      {headers: headers})
      .map((value: Response) => {
        return value.json();
      })
      .catch(
        (error: Response) => {
          return Observable.throw('something went wrong');
        }
      );
  }

  getAppName() {
    return this.http.get('https://angularudemi.firebaseio.com/appName.json')
      .map((value: Response) => {
          return value.json()
        }
      );
  }
}
