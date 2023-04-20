import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';
import { Post } from '../app_interfaces';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy{
  posts:Post[] = []
  subscription!: Subscription;

  constructor(private services: ServiceService){
  }
  
  ngOnInit(): void {
    this.subscription = this.services.getPost().subscribe((posts: Post[])=>{
      this.posts = posts;
      });
  }

  ngOnDestroy() : void{
    this.subscription.unsubscribe()
  }
}
