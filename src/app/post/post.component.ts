import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from '../shared/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  listPosts: Post[];
  public form: FormGroup;
  public editPost: Post;

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  
  constructor(public fb: FormBuilder, private _service: PostService) {}

  deletePost(idPost: number) {
    this._service.deletePost(idPost.toString()).subscribe((res) => {
      console.log(res);
      this.getAll();
    });
  }
  SortPost(idUser:number)
  {
    this._service.sortpost(idUser).subscribe((res : Post[])=>
    {
      this.listPosts=res;
    }) }
    searchPost(field:string)
    {
      this._service.search(field).subscribe((res:Post[])=> {this.listPosts=res;})
    }

  LikePost(idPost: number) {
    this._service.LikePost(idPost.toString()).subscribe((res) => {
      console.log(res);
      this.getAll();
    });
  }
  
  getAll() {
    this._service.getAllPost().subscribe((res) => {
      console.log(res);
      this.listPosts = res;
    });
  }
  setPost(post: Post) {
    this.form = this.fb.group({
      content: [post.content, Validators.compose([Validators.required])],
      caption: post.caption,
      views: post.views,
      likes: post.likes,
      creation_date: post.creation_date,
    });
    this.editPost = this.form.value;
    this.editPost.id_post = post.id_post;
  }

  updatePost(post: Post) {
    this.editPost.content =this.form.value.content;
    this._service.editPost(this.editPost,this.editPost.id_post).subscribe((res) => {
      this.getAll();
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      content: null,
      caption: null,
      views: null,
      likes: null,
      creation_date: null,
    });
    this.getAll();
  }



  onTableDataChange(event: any) {
    this.page = event;
    this.getAll();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }
}
