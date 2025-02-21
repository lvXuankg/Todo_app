import Item from "./Item";
import "./Item.scss";
import { GetDate } from "../../helpers/GetDate";
import { useState } from "react";

    
    
function Home(){

    const element = JSON.parse(localStorage.getItem("todo_list"));
    
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
            </div>
            
            
            
        </>
    )
}
export default Home;