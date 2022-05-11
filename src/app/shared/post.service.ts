import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}
  getAllPost(): Observable<Post[]> {
    return this._http.get<Post[]>('http://localhost:8089/posts/getAllPosts');
  }
  getAll() {
    return this._http.get('http://localhost:8089/posts/getAllPosts');
  }

  addPost(post) {
    return this._http.post('http://localhost:8089/posts/addPost', post);
  }

  editPost(post, postId):Observable<Object> {
    return this._http.put(
      'http://localhost:8089/posts/updatePost/' + postId,
      post
    );
  }

  deletePost(idPost) {
    return this._http.delete(
      'http://localhost:8089/posts/deletePost/' + idPost
    );
  }

  LikePost(idPost) {
    return this._http.get(
      'http://localhost:8089/posts/addlikes/' + idPost );
  }
  sortpost(idUser){
    return this._http.get(
      'http://localhost:8089/posts/findPostsByUser/' + idUser 
    );

  }
   search(field)
{
  return this._http.get('http://localhost:8089/posts/search/'+ field);

}

  

  uploadFile(post:Post,filedata){
    var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Headers', '*');
      myFormData.append('image', filedata);
      myFormData.append('imageName', post.caption);

      return this._http.post('http://localhost/UploadFile/Upload.php', myFormData, {
      headers: headers
      }); 
      /* Image Post Request */
      /*this._http.post('http://localhost/UploadFile/Upload.php', myFormData, {
      headers: headers
      }).subscribe(data => {
       //Check success message
       console.log(data);
      });  */
  }
}
