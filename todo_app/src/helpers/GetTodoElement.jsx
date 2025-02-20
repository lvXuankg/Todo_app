export const getTodoElement = (id) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    return todo_list[id-1];
}