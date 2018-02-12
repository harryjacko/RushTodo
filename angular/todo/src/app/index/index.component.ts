import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	emailFormControl = new FormControl('', [
		Validators.email,
	]);

	constructor() { }

	ngOnInit() {
	}

	loginUser(user_email : String, user_password : String){
		console.log(user_email + " + " + user_password);
	}

}
