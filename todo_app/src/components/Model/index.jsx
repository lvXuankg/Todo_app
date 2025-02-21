import "./Model.scss";
import { GetDate } from "../../helpers/GetDate";
import { SiTicktick } from "react-icons/si";
import { useEffect } from "react";
import { addNewTodoElement } from "../../helpers/TodoElement";
function Model({fnReload, isOpen, onClose}){
    if(!isOpen) return null;

    useEffect(() => {
        const ModelPick = document.querySelector(".model"); 
        if (!ModelPick) return; 

        const handleClickOutside = (event) => {
            if (event.target === ModelPick) {
                onClose();
            }
        };

        ModelPick.addEventListener("click", handleClickOutside);

        return () => {
            ModelPick.removeEventListener("click", handleClickOutside); 
        };
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let titleTodo = e.target.elements.title.value;
        addNewTodoElement(titleTodo);
        fnReload();
        onClose();
    }
    
    return (
        <>
            <div className="model" >
                <div className="model__view">
                    <h3 className="model__view--title">Tạo mới 1 todo</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="ViewInput">
                            <span>Chủ đề : </span>
                            <input name="title"/>
                        </div>
                        <div className="ViewDate">      
                            <span>Ngày tạo : </span>
                            <div className="ViewDate__date">{GetDate()}</div>
                        </div>
                        
                        <button type="submit">
                            <SiTicktick/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Model;