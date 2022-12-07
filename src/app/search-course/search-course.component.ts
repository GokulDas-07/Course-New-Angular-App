import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {
  title=""
  searchData:any=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
    this.api.searchCourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Wrong input")
        }else{
          this.searchData=response
        }
      }
    )
  }
}
