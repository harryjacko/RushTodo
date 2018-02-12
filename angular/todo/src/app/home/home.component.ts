import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from "../user";
import { Todo } from "../todo";
import { JsonResponse } from "../json.response";
import { SessionService } from "../session.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) { }
	user = null;
	errorMessage = "";
	private todoList: Array<Todo>;
	private baseUrl: string = "http://127.0.0.1:8000/";

	ngOnInit() {
		this.user = this.sessionService.getUser();
		if (this.user == null){
			this.router.navigate(['/index']);
		}

		this.http.get<JsonResponse>(this.baseUrl + "todoitems/user=" + this.user).subscribe
			(data => {
				this.todoList = data.results;
				// for (var i = 0; i < data.results.length; i++){
				// 	console.log(data.results[i].name)
				// }

			},
			err => {
				this.errorMessage = "0";
			});


	}

}
