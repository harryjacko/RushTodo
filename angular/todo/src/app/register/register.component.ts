import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from "../user";
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	emailFormControl = new FormControl('', [
		Validators.email,
	]);

	private baseUrl: string = "http://127.0.0.1:8000/users/"
	errorMessage = '';

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	registerUser(user_email : String, user_password : String,  user_password2 : String){
		let user = <User>({
				id: null,
				user_name: user_email,
				password: user_password,
				created: null,
			});

		this.http.post(this.baseUrl, user).subscribe
			(res => {
				console.log(res);
			},
			err => {
				this.errorMessage = "0";
			});
	}

}
