import { TiDeleteOutline } from "react-icons/ti";
function TodoListDelete(props){
    const { id} = props;
    // event.stopPropagation();
    const handleDelete = (event, id) => {
        event.stopPropagation();
        console.log(id);
    }
    return (
        <>
            <button  className="todo__delete" onClick={(event) => handleDelete(event,id)}>
                <TiDeleteOutline className="todo__delete-icon"/>
            </button>
        </>
    )
}
export default TodoListDelete;