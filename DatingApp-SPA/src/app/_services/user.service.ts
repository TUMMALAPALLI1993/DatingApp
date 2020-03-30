import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Get the list of users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  // Get the specific user
  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  // Update the user description,location,interests etc.
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }

  // Set user profile pic from photos list
  setMainPhoto(userID: number, id: number) {
    return this.http.post(this.baseUrl + 'users/' + userID + '/photos/' + id + '/setMain', {});
  }

  // Delete user profile picture
  deletPhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
  }

}
