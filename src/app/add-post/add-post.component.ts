import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/models/post';
import { PostService } from '../shared/post.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  public form: FormGroup;
  filedata:any;
  constructor(public fb: FormBuilder, public service: PostService,private http: HttpClient,private datePipe: DatePipe) {
    this.form = this.fb.group({
      content: [null, Validators.compose([Validators.required])],
      caption:null
    });
  }

  addPost(post: Post) {
    //post.caption=this.datePipe.transform(Date.now(),'yyyy-MM-dd-h-mm-ss')+this.filedata.name;

    var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Headers', '*');
      myFormData.append('image', this.filedata);
      //myFormData.append('imageName', post.caption);
      /* Image Post Request */
      this.http.post('http://localhost/UploadFile/Upload.php', myFormData, {
      headers: headers
      }).subscribe(data => {
       //Check success message
       console.log(data);
      });  

    this.service.addPost(post).subscribe((res) => {
      /*this.service.uploadFile(post,this.filedata).subscribe(res=> {
        console.log("image sauvegardée");
      })*/
      console.log(res);
    });
  }

  onFileSelected(event){
    console.log(event.target.files[0]);
    this.filedata = event.target.files[0];
    //this.selectedFile = <File> event.target.files[0];
  }
  ngOnInit(): void {}
}
