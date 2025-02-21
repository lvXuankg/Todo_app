export const fnDeleteIcon = (id) => {
    const todo_list = JSON.parse(localStorage.getItem("todo_list"));
    const index = todo_list.findIndex((item) => item.id === id);
    if(index !==-1){
        todo_list.splice(index,1);
        localStorage.setItem("todo_list", JSON.stringify(todo_list));
    }
    
}