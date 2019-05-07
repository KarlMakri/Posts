import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  listPost: object[];
  key: number;
  like: number;
  post: object;
  img: string;

  constructor(private Route: ActivatedRoute, private postService: PostService) {
    this.Route.params
      .subscribe(params => {
        this.key = params.key;
      });
   }

  ngOnInit() {
    this.getPost(this.key);
  }

  getPost(i) {
    this.post = this.postService.getPost(i);
  }

}
