import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Post } from '../app_interfaces';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['../app.component.css']
})

export class PostCreateComponent {
  currentString = ""
  constructor(private service: ServiceService){ }
  onAddPost(){
    let post:Post = {post: this.currentString}
    this.service.addPost(post);
    this.currentString = "";
  }
}
