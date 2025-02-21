import { useParams } from "react-router-dom";
import { getTodoElement } from "../../helpers/TodoElement"; 
import "./ShowTodoElement.scss";
import CheckBox from "../../components/CheckBox";
import AddTodoList from "../../components/AddTodoList";
import { addNewTodoItem } from "../../helpers/TodoElement";
import { useState } from "react";
import Model from "../../components/Model";
import DelItem from "../../components/DelItem";
import { fnDeleteTodoItem } from "../../helpers/TodoListDelete";
function ShowTodoElement(){
    const params = useParams();
    // console.log(params.id);
    const list = getTodoElement(params.id);
    // console.log(list);
    const [isOpen, setIsOpen] = useState(false);
    const [reload, setReload] = useState(1);
    const ReloadPage = () => {
        setReload(reload => reload + 1);
    }
    return (
        <>
            <div className="ShowTodoItem">
                <div className="todoItem">
                    <h3 className="todoItem__title">
                        <div className="inner-title">Chủ đề :</div>
                        <div className="inner-response">{list.title}</div> 
                    </h3>
                    <div className="todoItem__date">
                        <div className="inner-title">Ngày tạo :</div>
                        <div className="inner-response">{list.dateCreated}</div> 
                    </div>
                    <ul className="todoItem__list">
                        <h3>Việc cần làm: </h3>
                        {list.notes.map((item, index) => (
                            <li key={index} className="todoItem__list--item">
                                <CheckBox status={item.status} id={list.id} id_item={item.id}/>
                                <span>{item.title}</span>
                                <DelItem fnDel={() => fnDeleteTodoItem(list.id, item.id)} fnReload = {ReloadPage}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <AddTodoList fnOpen = {() => setIsOpen(true)}/>
                { isOpen && 
                    <Model fnReload = {ReloadPage} 
                    isOpen={isOpen} 
                    onClose={()=>setIsOpen(false) } 
                    name = "Thêm 1 việc" 
                    fnPOST = {(title) => addNewTodoItem(list.id, title)} 
                    type="AddItem"/>
                }
            </div>
            
        </>
    );
}
export default ShowTodoElement;