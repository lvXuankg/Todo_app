import { GrAdd } from "react-icons/gr";
import { addNewTodoElement } from "../../helpers/TodoElement";

function AddTodoList(props){
    const { fnOpen} = props;
    const handleClick = () => {
        fnOpen();    
    }
    return (
        <>
            <button className="addButton" onClick={handleClick}>
                <GrAdd/>
            </button>
        </>
    )
}
export default AddTodoList;