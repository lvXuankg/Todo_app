import { CountProgress } from "../../helpers/Progress";

import Progress from "../../components/Progress";
function Item(props){
    const {item, index} = props;
    const ProgressValue = CountProgress(item.notes);
    
    return (
        <>
            <div className="todo">
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