import Item from "./Item";
import "./Item.scss";
import { GetDate } from "../../helpers/GetDate";

    
    
function Home(){

    const element = JSON.parse(localStorage.getItem("todo_list"));
    
    return (
        <>
            <div className="home">
                {
                    element.map((item, index) => (
                        <Item item={item} index={index+1} key={index}/>
                    ))
                }
            </div>
            
            
            
        </>
    )
}
export default Home;