import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserProvider {

  constructor(private http: HttpClient) {}

  addUser(email) {
    this.http.post('../../data.json', {email: email})
  }
}
