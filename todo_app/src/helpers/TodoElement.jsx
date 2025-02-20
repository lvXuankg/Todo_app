export const getTodoElement = (id) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    return todo_list[id-1];
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