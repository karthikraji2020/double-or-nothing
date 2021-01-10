import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './models/user';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BetService {

  private user = new BehaviorSubject<User>(null);
  cast = this.user.asObservable();

  selectedUsers: User[] = [];

  selectUser(user: User) {
    let index =this.selectedUsers.findIndex(users=>users.Name ===user.Name);
    if(index===-1){
      this.selectedUsers.push(user);
    }
    // return of(this.selectedUsers);
    return this.user.next(user);
  }

  clear() {
    this.selectedUsers = [];
  }
  constructor( private _http:HttpClient) {
  }
  getAllUsers():Observable<any>{
    console.log(environment.APIURL);
    return this._http.get(`${environment.APIURL}`).pipe(
      catchError(this.handleError<User>(`getUsers `))
    );
  }
  /* GET heroes whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
