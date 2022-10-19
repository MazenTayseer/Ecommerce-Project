import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(username: string, password: string) {
    return this.httpClient.post(`${environment.apiURL}auth/login`, {
      username: username,
      password: password,
    });
  }

  saveId(data: any) {
    // @ts-ignore
    localStorage.setItem("id", Object.entries(data)[0][1].user._id);
  }

}
