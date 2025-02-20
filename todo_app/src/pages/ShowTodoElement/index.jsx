import { useParams } from "react-router-dom";
import { getTodoElement } from "../../helpers/TodoElement"; 
import "./ShowTodoElement.scss";
import CheckBox from "../../components/CheckBox";
function ShowTodoElement(){
    const params = useParams();
    // console.log(params.id);
    const list = getTodoElement(params.id);
    console.log(list);
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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </>
    );
}
export default ShowTodoElement;