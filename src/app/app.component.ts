import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any;
  isSelected: boolean = false;
  loadCourses()
  {
    this.isSelected = false
    this.courses = [{id:1, name: 'Course1'}, {id:2, name: 'Course2'}, {id:3, name: 'Course3'}];
  }

  trackCourse(index:any, course: any)
  {
    course ? course.id : undefined;
  }
}
