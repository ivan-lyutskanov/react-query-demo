import { v4 as uuidv4 } from 'uuid';

export default class Todo {

    constructor(id, title, completed = false) {
        this.id = id; 
        this.title = title;
        this.completed = completed;
    }

    get id() {
        return this._id;
    } 

    set id(newId) {
        if (!newId) {
            this._id = uuidv4();
        } else {
            this._id = newId;
        }
    } 

    get title() {
        return this._title;
    } 

    set title(newTitle) {
        if (typeof newTitle !== 'string' ) throw new Error('Title must be string!');
        newTitle = newTitle.trim();
        if (newTitle.length === 0) throw new Error('Missing title!');
        this._title = newTitle;
    } 

    get completed() {
        return this._completed;
    }

    set completed(newVal) { 
        this._completed = Boolean(newVal);
    }
}