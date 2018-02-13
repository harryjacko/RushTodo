import {EventEmitter, Injectable} from '@angular/core';
// import {User} from "./user";

@Injectable()
export class SessionService {
	emitData = new EventEmitter<string>();
	// private user = null;
	private user = 1;
	private todo = null;


	constructor() { }

	emitUser(username: string){
		this.emitData.emit(username);
	}

	setUser(user){
		this.user = user;
	}

	setTodoItem(todo){
		this.todo = todo;
	}

	getTodoItem(){
		return this.todo;
	}

	getUser(){
		return this.user;
	}

	logout(){
		this.user = null;
	}

}
