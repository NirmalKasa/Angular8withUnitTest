import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataStorage } from './user.datastorage';
import { ThrowStmt } from '@angular/compiler';
import { User } from './user.model';

@Injectable({providedIn:'root'})
export class UserService {

    UserList : Array<Object> = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
    userListChanged = new Subject<Object[]>();
    constructor(private dataStorage : DataStorage) {}

    getUserList(): Observable<Object[]>{
       
        this.userListChanged.next(this.UserList.slice());
        return of(this.UserList)
    }

    addUser(user: User) : number{
      //  this.UserList.push(user); 
          console.log(user);
         this.dataStorage.addUserData(user)
       //  this.userListChanged.next(this.UserList.slice());
        return this.UserList.length
    }

    deleteUser( index : number) : number{
        this.UserList.splice(index,1);
         this.userListChanged.next(this.UserList.slice());
         return this.UserList.length
    }

    clearUserData(){
        this.dataStorage.clearUserDetails();
    }
}