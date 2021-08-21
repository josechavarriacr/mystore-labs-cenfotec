import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Article by Jose';
  posts : any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
      },
      (error) => { console.log(error); });
  }

}
