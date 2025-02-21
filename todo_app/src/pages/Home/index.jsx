import Item from "./Item";
import "./Item.scss";
import { useState } from "react";
import AddTodoList from "../../components/AddTodoList";
import Model from "../../components/Model";
import { addNewTodoElement } from "../../helpers/TodoElement";
    

function Home(){
    const element = JSON.parse(localStorage.getItem("todo_list"));
    const [isOpen, setIsOpen] = useState(false);
    const [reload, setReload] = useState(1);
    const ReloadPage = () => {
        setReload(reload => reload + 1);
    }
    
    return (
        <>
            <div className="home">
                {
                    (element || []).map((item, index) => (
                        <Item item={item} index={index+1} fnReload = {ReloadPage} key={index}/>
                    ))
                }
                <AddTodoList fnOpen={() => setIsOpen(true)}/>
                {isOpen && 
                    <Model 
                        fnReload = {ReloadPage} 
                        isOpen={isOpen} 
                        onClose={()=>setIsOpen(false) } 
                        name = "Tạo mới một Todo" 
                        fnPOST = {(id) => addNewTodoElement(id)} 
                        type = "AddList"
                 />
                }
            </div>
            
            
            
        </>
    )
}
export default Home;