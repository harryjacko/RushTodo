import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Todo } from "../todo";
import { JsonResponse } from "../json.response";
import { SessionService } from "../session.service";

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) { }
	todo = null;
	user = null;
	private baseUrl: string = "http://127.0.0.1:8000/";

	todoDetails = {
		id: null,
		name: '',
		user: null,
		completed: false,
		remind_date: null,
		repeat_remind: false,
		remind_location: '',
		image: ''
	}

	ngOnInit() {
		this.user = this.sessionService.getUser();
		if (this.user == null){
			this.router.navigate(['/index']);
		}
		this.todo = this.sessionService.getTodoItem();
		if (this.todo == null){
			this.router.navigate(['/home']);
		}

		// GET TDO based off the id given
		this.fillForm()


		// Fill form with said todo detail

		// make a post method for editing it

		// make a delete method for removing it
	}

	fillForm(){
		this.http.get<Todo>(this.baseUrl + "todoitems/item_id=" + this.todo).subscribe
			(data => {
				this.todoDetails.id = data.id;
				this.todoDetails.name = data.name;
				this.todoDetails.user = data.user;
				this.todoDetails.completed = data.completed;
				this.todoDetails.remind_date = data.remind_date;
				this.todoDetails.repeat_remind = data.repeat_remind;
				this.todoDetails.remind_location = data.remind_location;
				this.todoDetails.image = data.image;
				console.log(this.todoDetails);
			},
			err => {
				console.log(err);
			});
	}

	updateTodo(name, date){
		if (date ==''){
			date = null;
		}
		this.todoDetails.name = name;
		this.todoDetails.remind_date = date;

		this.http.put(this.baseUrl + "todoitems/item_id=" + this.todo + "/", this.todoDetails).subscribe
			(res => {
				this.router.navigate(['/home'])
			},
			err => {
				console.log(err);
			});
	}

	deleteTodo(){
		this.http.delete(this.baseUrl + "todoitems/item_id=" + this.todo + "/").subscribe
			(res => {
				this.router.navigate(['/home'])
			},
			err => {
				console.log(err);
			});
	}

}
