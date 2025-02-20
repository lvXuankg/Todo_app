import { CountProgress } from "../../helpers/Progress";
import { handleRedirect } from "../../helpers/Navigate";
import Progress from "../../components/Progress";
function Item(props){
    const {item, index} = props;
    const ProgressValue = CountProgress(item.notes);
    const fnRedirect = handleRedirect();
    return (
        <>
            <div className="todo" onClick={() => fnRedirect(index)}>
                <div className="todo__avatar">
                    <span>{item.title}</span>
                    <div className={`Progress-bar }`}>
                        <Progress ProgressValue={ProgressValue}/>
                    </div>
                </div>
                <span className="todo__date">Ngày tạo : {item.dateCreated}</span>
            </div>
        </>
    )
}
export default Item;