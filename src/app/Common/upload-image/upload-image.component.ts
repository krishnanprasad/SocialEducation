import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { event } from 'jquery';
import { LoaderAService } from 'src/app/Modal/loader-a/loader-a.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
public message:String;
public progress:number;

@Output() public onUploadFinished = new EventEmitter();
//   fileToUpload:File=null;
//   imageUrl: string="/assets/Image/default_image_webinar.jpg";
//   constructor(private loader:LoaderAService) { }

//   ngOnInit() {
//     this.loader.close()
//   }
//  handleFileInput(file : FileList){
//    this.fileToUpload=file.item(0);
//    var reader = new FileReader();
//    reader.onload=(event:any)=>{
//      this.imageUrl=event.target.result;
//    }
//    reader.readAsDataURL(this.fileToUpload)
//  }

constructor(private http:HttpClient,private loader:LoaderAService){

}



ngOnInit(){
this.loader.close();
}
public uploadFile=(files)=>{
  if(files.length===0)
  return;
  let fileToUpload=<File>files[0];
  const formData=new FormData();
  formData.append('file',fileToUpload,fileToUpload.name);


  this.http.post('http://localhost:51181/api/webinar/UploadImageTest',formData,{reportProgress:true,observe:'events'})
  .subscribe(event=>{
    if(event.type===HttpEventType.UploadProgress){
      this.progress=Math.round(100*event.loaded/event.total);
    }
    else if(event.type===HttpEventType.Response){
      this.message='Upload Success.';
      debugger
      this.onUploadFinished.emit(event.body);
     
    }
  })
}
}
