import { Todo } from "./todo";

export class JsonResponse {
	constructor(public count: number, public next, public previous, public results: Array<Todo>){ }
}
