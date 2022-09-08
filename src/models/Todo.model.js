//Domain Object Constructor
class Todo {
    #id; 
    #title; 
    #completed;

    constructor(id, title, completed = false) {
        this.#id = id; 
        this.#title = title;
        this.#completed = completed;
    }

    get id() {
        return this.#id;
    } 

    set id(newId) {
        if (!newId) throw 'Id is missing!';
        this.#id = newId;
    } 

    get title() {
        return this.#title;
    } 

    set title(newTitle) {
        newTitle = newTitle.trim();
        if (!newTitle) throw 'Title is missing!'
        this.#title = newTitle;
    } 

    get completed() {
        return this.#completed;
    }

    set completed(newVal) { 
        this.#completed = Boolean(newVal);
    }

    static exportDTO({title}) {
        return { title, completed: false }
    }
}
