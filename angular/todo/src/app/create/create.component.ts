import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from "../user";
import { Todo } from "../todo";
import { JsonResponse } from "../json.response";
import { SessionService } from "../session.service";
import { NgForm } from "@angular/forms";

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

	constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) { }
	private todo_name;
	user = null;
	errorMessage = "";
	private baseUrl: string = "http://127.0.0.1:8000/";

	// todoDetails = {
	// 	name: '',
	// 	user: null,
	// 	completed: false,
	// 	remind_date: null,
	// 	repeat_remind: false,
	// 	remind_image: '',
	// 	image: ''
	// }

	ngOnInit() {
		this.user = this.sessionService.getUser();
		if (this.user == null){
			this.router.navigate(['/index']);
		}
	}

	submitTodo(name, date){
		// HAVE A FUNCTION THAT CHECKS ITS THE RIGHT FORMAT?
		console.log(date);
		if (date ==''){
			date = null;
		}
		let todo = <Todo>({
			id: null,
			name: name,
			user: this.user,
			completed: false,
			remind_date: date,
			repeat_remind: false,
			remind_location: '',
			image: ''
		});

		this.http.post(this.baseUrl + "todoitems/", todo).subscribe
			(res => {
				this.router.navigate(['/home'])
			},
			err => {
				this.errorMessage = "0";
			});

	}

}
