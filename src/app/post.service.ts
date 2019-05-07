import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  listPost: object[] = [

    // tslint:disable-next-line:max-line-length
    {titre: 'Le seigneur des anneaux', date: 1998, resume: 'Rjfkdjfklsqdjfkms', description: 'kdfjkqsjdflmkjqsdlmkfjmqksjdk', img: 'http://fr.web.img3.acsta.net/c_215_290/o_club300-overlay-ok.png_0_se/pictures/19/03/22/10/28/1786889.jpg', like: '14' },


  ];

  constructor() { }


  getPosts() {
    return this.listPost;
  }

  getPost(i) {
    return this.listPost[i];
  }
}
