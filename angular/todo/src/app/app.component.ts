import { Component } from '@angular/core';
import { SessionService } from "./session.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Todo Application';
	loggedIn = false;

	constructor(private sessionService: SessionService, private router: Router) {
		router.events.forEach((event) => {
			this.loggedIn = false;
			if (this.sessionService.getUser() != null){
				this.loggedIn = true;
			}

		});
	}

	ngOnInit(){
	}

	logout(){
		this.sessionService.logout();
		this.router.navigate(["/index"]);
	}
}
