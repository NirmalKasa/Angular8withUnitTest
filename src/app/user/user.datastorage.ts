import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { UserService } from './user.service';


@Injectable({providedIn:'root'})
export class DataStorage {

    //userListChanged = new Subject<Object>();
    //UserList : Array<Object> = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
    constructor(private http : HttpClient){}

    addUserData(user : User[]){
        console.log("adding user =="+user);
      return   this.http.put<User[]>('https://himabindu-bab64.firebaseio.com/users.json',user)
    //   .subscribe( 
    //         (responseData => {
    //             console.log(responseData)    
    //         })
    //     )
       // this.getUserData();
    }

    onStoreUsers(usersList : User[]) {
        console.log("adding user =="+usersList);
        this.http.put('https://himabindu-bab64.firebaseio.com/users.json',usersList).subscribe(
            response => {
                console.log(response);
            }
        )
    }
    getUserData(){
       return  this.http.get<User[]>('https://himabindu-bab64.firebaseio.com/users.json');
        
    }

    clearUserDetails(){
        this.http.delete('https://himabindu-bab64.firebaseio.com/users.json').
        subscribe( 
            (ressponseData => {
                console.log(ressponseData);
                
            })
        )

    }
}