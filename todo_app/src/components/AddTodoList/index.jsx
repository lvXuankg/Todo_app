import { GrAdd } from "react-icons/gr";
import "./AddTodoList.scss";
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