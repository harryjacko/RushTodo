export class Todo {
	constructor(public id: number, public name: string, public user: number, public completed: boolean, public remind_date, public repeat_remind: boolean, public remind_location: string, public image: string){ }
}
