import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { DataStorage } from './user.datastorage';

import { User } from './user.model';

@Injectable({providedIn:'root'})
export class UserService {

   // UserList : Array<Object> = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
    usersList : User[] = [ new User('giri','EY'), new User ('suresh','EY') ] 
    userListChanged = new Subject<User[]>();
    constructor(private dataStorage : DataStorage) {}

    getUserList(): Observable<Object[]>{
       
        this.dataStorage.getUserData().subscribe( data => {
            console.log(data);
            this.userListChanged.next(data);
        })
       
       
        return of(this.usersList)
    }

    onStoreUsers() {
        this.dataStorage.onStoreUsers(this.usersList);
    }
    addUser(user: User) : number{
      //  this.UserList.push(user); 
          console.log(user);
          this.usersList.push(user);
         this.dataStorage.addUserData(this.usersList.slice()).subscribe( data => {
             console.log(data);      
         })
       
        return this.usersList.length
    }

    deleteUser( index : number) : number{
        this.usersList.splice(index,1);
         this.userListChanged.next(this.usersList.slice());
         return this.usersList.length
    }

    clearUserData(){
        this.dataStorage.clearUserDetails();
    }
}