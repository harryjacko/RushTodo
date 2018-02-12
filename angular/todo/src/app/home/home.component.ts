import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { User } from "../user";
import { SessionService } from "../session.service";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) { }
	user = null

	ngOnInit() {
		this.user = this.sessionService.getUser();
		if (this.user == null){
			this.router.navigate(['/index']);
		}
	}

}
