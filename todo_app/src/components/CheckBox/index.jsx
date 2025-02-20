import { useState } from "react";
import { setTodoItemElement } from "../../helpers/TodoElement";
function CheckBox(props){
    const {id, id_item} = props;
    const [status, setStatus] = useState(props.status);
    const handleClick = () => {
        setStatus((prevStatus) => (prevStatus === "Done" ? "Pending" : "Done"));
        setTodoItemElement(id,id_item);
        
    };
    return (
        <>
            <button className="checkBox" onClick={handleClick}>{status=="Done"? "✔️" : ""}</button>
        </>
    )
}
export default CheckBox;