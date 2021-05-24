import { CourseService } from '../course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  	selector: 'app-course-list',
  	templateUrl: './course-list.component.html'
})
export class CoursesListComponent implements OnInit {
	filteredCourses: Course[] = [];
	_courses: Course[] = [];
	_filterBy: string = '';

  	constructor(private courseService: CourseService) { }

	ngOnInit(): void {
		this.retrieveAll();
	}

	retrieveAll(): void{
		this.courseService.retrieveAll().subscribe({
			next: courses => {
				this._courses = courses;
				this.filteredCourses = this._courses
			},
			error: err => console.log('Error', err)
		})
	}

	deleteById(courseId: number): void{
		this.courseService.deleteById(courseId).subscribe({
			next: () => {
				console.log('Delete with success');
				this.retrieveAll();
			},
			error: err => console.log("Error", err)
		});
	}

	set filter(value: string){
		this._filterBy = value;
		this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
	}

	get filter(){
		return this._filterBy;
	}
}