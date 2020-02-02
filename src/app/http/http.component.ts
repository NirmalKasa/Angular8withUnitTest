import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.dataService.getPostData();
    this.dataService.getUserData(1);
  }
}
