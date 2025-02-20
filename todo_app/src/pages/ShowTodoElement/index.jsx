import { useParams } from "react-router-dom";
import { getTodoElement } from "../../helpers/GetTodoElement"; 
import "./ShowTodoElement.scss";
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
                                <button className="checkBox"></button>
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