import { Component } from '@angular/core';
import {  Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
    
    template:'Search-component'
})
export class SearchComponent{

}

@Component({
    
    template:'Header-component'
})
export class HeaderComponent{

}

export const route : Routes = [
    { path :'', component: HeaderComponent, pathMatch:'full'},
    { path :'search', component: SearchComponent },
    { path :'header', component: HeaderComponent },
    { path :'user', component: UserComponent }
]


