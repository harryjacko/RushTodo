import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	emailFormControl = new FormControl('', [
		Validators.email,
	]);
	private baseUrl: string = "http://127.0.0.1:8000/"
	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	loginUser(user_email : String, user_password : String){
		if (user_email != ''){
			this.http.get(this.baseUrl + "users/" + user_email).subscribe(data => {
				console.log(data);
			});
		}

	}

}
