import { TiDeleteOutline } from "react-icons/ti";
import { fnDeleteIcon } from "../../helpers/TodoListDelete";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
function TodoListDelete(props){
    const { id, fnReload} = props;
    // event.stopPropagation();
    const handleDelete = (event, id) => {
        event.stopPropagation();
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fnDeleteIcon(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fnReload();
            }
          });
        
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