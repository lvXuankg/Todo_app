import {useNavigate} from "react-router-dom";
export const handleRedirect = () => {
    const navigate = useNavigate();
    return (id) => navigate(`/showTodo/${id}`);
}