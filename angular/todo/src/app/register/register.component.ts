import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from "../user";
import {Headers, Http, Response} from '@angular/http';

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

	constructor(private http: Http) { }

	ngOnInit() {
	}

	registerUser(user_email : String, user_password : String,  user_password2 : String){
		let user = <User>({
				id: null,
				user_name: user_email,
				password: user_password,
				created: null,
			});

			const headers = new Headers();
			headers.append('Content-Type', 'application/json');
			this.http.post(this.baseUrl, user, {
				headers: headers
			}).subscribe(

			)
	}

}
