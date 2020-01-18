import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({providedIn:'root'})
export class UserService {

    UserList : Array<Object> = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
    userListChanged = new Subject<Object[]>();
    constructor() {}

    getUserList(): Observable<Object[]>{
       
        this.userListChanged.next(this.UserList.slice());
        return of(this.UserList)
    }

    addUser(user: any) : number{
        this.UserList.push(user);
         this.userListChanged.next(this.UserList.slice());
        return this.UserList.length
    }

    deleteUser( index : number) : number{
        this.UserList.splice(index,1);
         this.userListChanged.next(this.UserList.slice());
         return this.UserList.length
    }
}