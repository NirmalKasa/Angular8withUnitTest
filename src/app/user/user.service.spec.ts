import { UserService } from "./user.service"
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';


describe( 'User-Service',()=>{
    let userService : UserService ;


    beforeEach(() =>{
        TestBed.configureTestingModule ( {
            providers: [UserService]
        })

        userService = TestBed.get(UserService);
    })

    it('user service should be created',() => {
        expect(userService).toBeTruthy();
    })
})

// we can write any no of suites in a spec
describe('getUserList',()=>{
    let userService : UserService ;
   

    beforeEach(() =>{
        TestBed.configureTestingModule ( {
            providers: [UserService]
        })

        userService = TestBed.get(UserService);
    })

    it('should return collection of users', () => {
        const userResponse = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
        let response;

        spyOn(userService,'getUserList').and.returnValue(of(userResponse));

        userService.getUserList().subscribe( resp =>{
            response = resp;
        })

       expect(userResponse).toBe(response);
    })


    it('should add user to collection', () => {
        const userResponse = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
        const user = [ {username :'hari',company:'EY'}]
       
       expect(userService.addUser(user)).toBe(3);
    })

    it('should delete user from collection', () => {
        const userResponse = [ {username :'hari',company:'EY'}, {username :'giri',company:'EY'}]
         let index = 1

       expect(userService.deleteUser(1)).toBe(1);
    })
})