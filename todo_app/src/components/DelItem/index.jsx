import { FaRegTrashAlt } from "react-icons/fa";

function DelItem({fnDel, fnReload}){
    const handleClick = () => {
        fnDel();
        fnReload();
    }
    return (
        <>
            <button className="delItem" onClick={handleClick}>
                <FaRegTrashAlt />
            </button>
        </>
    )
}
export default DelItem;