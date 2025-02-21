export const fnDeleteIcon = (id) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    const index = todo_list.findIndex((item) => item.id === id);
    if(index !==-1){
        todo_list.splice(index,1);
        localStorage.setItem("todo_list", JSON.stringify(todo_list));
    }
    
}
export const fnDeleteTodoItem = (id, item_id) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    
    const index = todo_list.findIndex((item) => item.id === id);
    if(index !==-1){
        const index_item = todo_list[index].notes.findIndex((item) => item.id === item_id);
        if(index_item !== -1) todo_list[index].notes.splice(index_item, 1);
        localStorage.setItem("todo_list", JSON.stringify(todo_list));
    }
}