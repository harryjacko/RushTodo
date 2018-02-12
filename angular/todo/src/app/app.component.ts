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

	constructor(private sessionService: SessionService, private router: Router) { }

	logout(){
		console.log("s")
		this.sessionService.logout();
		this.router.navigate(["/index"]);
	}
}
