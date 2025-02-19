import { Outlet } from "react-router-dom"
import Header from "./Header";
function DefaultLayouts(){
    return (
        <>
            <header className="layout-default__header">
                <Header/>
            </header>
            
            <main className="layout-default__main">
                <Outlet/>
            </main>
        </>
    )
}
export default DefaultLayouts;