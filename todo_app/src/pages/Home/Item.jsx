
function Item(props){
    const {item, index} = props;
    return (
        <>
            <div className="todo">
                <div className="todo__avatar">
                    <span>{index}</span>
                </div>
                <span className="todo__title">{item.title}</span>
            </div>
        </>
    )
}
export default Item;