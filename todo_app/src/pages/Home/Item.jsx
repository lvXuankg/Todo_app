
function Item(props){
    const {item} = props;
    return (
        <>
            <div className="todo">
                <div className="todo__avatar">
                    <span>{item.title}</span>
                </div>
                <span className="todo__date">Ngày tạo : {item.dateCreated}</span>
            </div>
        </>
    )
}
export default Item;