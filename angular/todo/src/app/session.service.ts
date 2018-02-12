import {EventEmitter, Injectable} from '@angular/core';
// import {User} from "./user";

@Injectable()
export class SessionService {
	emitData = new EventEmitter<string>();
	private user = null;


	constructor() { }

	emitUser(username: string){
		this.emitData.emit(username);
	}

	setUser(user){
		this.user = user;
	}

	getUser(){
		return this.user;
	}

	logout(){
		this.user = null;
	}

}
