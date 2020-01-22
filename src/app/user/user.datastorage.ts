import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';


@Injectable({providedIn:'root'})
export class DataStorage {

    constructor(private http : HttpClient){}

    addUserData(user : User){
        console.log("adding user =="+user);
        this.http.post('https://himabindu-bab64.firebaseio.com/posts.json',user).subscribe( 
            (ressponseData => {
                console.log(ressponseData)
            })
        )
    }

    getUserData(){
        this.http.get('https://himabindu-bab64.firebaseio.com/posts.json').
        subscribe( 
            (ressponseData => {
                console.log(ressponseData)
            })
        )
    }

    clearUserDetails(){
        
    }
}