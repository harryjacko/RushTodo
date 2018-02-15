import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { User } from "../user";
import { SessionService } from "../session.service";

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	emailFormControl = new FormControl('', [
		Validators.email,
	]);
	private baseUrl: string = "http://ec2-18-216-140-140.us-east-2.compute.amazonaws.com:8000/";
	errorMessage = '';

	constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) { }

	ngOnInit() {
		if (this.sessionService.getUser() != null){
			this.router.navigate(['/home']);
		}
	}

	loginUser(user_email : String, user_password : String){
		if (user_email != ''){
			this.http.get<User>(this.baseUrl + "users/" + user_email).subscribe
				(data => {
					console.log(data.id)
					this.sessionService.setUser(data.id);
					this.router.navigate(['/home']);
				},
				err => {
					this.errorMessage = "0";
				});
		}

	}

}
