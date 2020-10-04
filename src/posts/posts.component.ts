import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  postList:Post[]=[];
  ngOnInit(): void {
    this.postsService.getPosts().subscribe(res=>{
      console.log(res)
      this.postList = res;
    },
    (err)=>alert('catch error inside component'+err.message)
    )
  }

}
