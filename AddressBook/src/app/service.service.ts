import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Post } from './app_interfaces';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  posts: Post[] = [];
  private postUpDate = new Subject<Post[]>()
  constructor() { }

  getPost(): Observable<Post[]>{
    return this.postUpDate.asObservable();
  }
  addPost(data : Post){
    this.posts.push(data)
    this.postUpDate.next([...this.posts]);
  }

}
