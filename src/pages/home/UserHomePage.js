// import Footer from "../../components/Footer";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/user/Sidebar";
import TodoListTable from "../../components/user/TodoListTable";

function UserHomePage() {
    const [isAtHome, setIsAtHome] = useState(true)
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <h1>Homepage</h1>
                    <TodoListTable isAtHome={isAtHome}/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default UserHomePage;