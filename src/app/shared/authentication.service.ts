import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";


export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful,
//store JWT token in session
  findOne(id: number): Observable<User> {
    return this.httpClient.get("http://localhost:8900/retrieve-user/" + id).pipe(
      map((user:User) => user)
    )
  }
  authenticate(user) {
    return this.httpClient
      .post<any>("http://localhost:8900/Sign-In/", user)
      .pipe(
        map(userData => {
          sessionStorage.setItem("email", user);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("roles", user);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("email");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("email");
  }

}
