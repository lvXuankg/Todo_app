import Item from "./Item";
import "./Item.scss";
import { GetDate } from "../../helpers/GetDate";
import { useState } from "react";
import AddTodoList from "../../components/AddTodoList";
import Model from "../../components/Model";

    
    
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
                    element.map((item, index) => (
                        <Item item={item} index={index+1} fnReload = {ReloadPage} key={index}/>
                    ))
                }
                <AddTodoList fnOpen={() => setIsOpen(true)}/>
                <Model fnReload = {ReloadPage} isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
            </div>
            
            
            
        </>
    )
}
export default Home;