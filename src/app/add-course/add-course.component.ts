import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  title=""
  description=""
  venue=""
  duration=""
  date=""


  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"title":this.title,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.duration}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        alert("Course added successfully")
        this.title=""
        this.description=""
        this.venue=""
        this.duration=""
        this.date=""

      }
    )
  }

}
