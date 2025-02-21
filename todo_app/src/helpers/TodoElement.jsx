import { v4 as uuidv4 } from 'uuid';
import { GetDate } from './GetDate';
export const getTodoElement = (id) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    return todo_list[id-1];
}
export const addNewTodoElement = (title) => {
    const id = uuidv4();
    const date = GetDate();
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    const new_Todo = {
        id: id,
        title: title,
        dateCreated: date,
        notes: []
    };

    todo_list.push(new_Todo);

    localStorage.setItem("todo_list", JSON.stringify(todo_list));
    
}
export const setTodoItemElement = (id, id_item) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list")) || [];
    const index = todo_list.findIndex((item) => item.id === id);

    const index_item = todo_list[index].notes.findIndex((item) => item.id === id_item);
    console.log(todo_list[index].notes[index_item]);
    let newStatus = todo_list[index].notes[index_item].status == "Done" ? "Pending" : "Done";

    todo_list[index].notes[index_item].status = newStatus;
    localStorage.setItem("todo_list", JSON.stringify(todo_list));
}