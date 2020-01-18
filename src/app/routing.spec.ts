import { Location } from "@angular/common"
import { Router } from '@angular/router';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {route, HeaderComponent, SearchComponent} from './routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

describe('app-unit-test',()=>{

    let location : Location;
    let router : Router
    let fixture;

    beforeEach( ()=> {
        TestBed.configureTestingModule( {
            imports: [RouterTestingModule.withRoutes(route)],
            declarations : [HeaderComponent,SearchComponent,AppComponent,UserComponent]
            
        })

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

        it('naviget to home by default ', fakeAsync(() => {
            router.navigate(['/header']);
            tick();
            expect(location.path()).toBe('/header')
        }));

        it(' naviget to Search with /search ', fakeAsync(() => {
            router.navigate(['search']);
            tick();
            expect(location.path()).toBe('/search')
        }))

        it(' naviget to user with /user ', fakeAsync(() => {
            router.navigate(['user']);
            tick();
            expect(location.path()).toBe('/user')
        }))
   
})
