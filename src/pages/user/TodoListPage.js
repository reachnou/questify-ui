// import Footer from "../components/Footer";
import Navbar from "../../components/Navbar";
import CreateTodoListForm from "../../components/user/CreateTodoListForm";
import Sidebar from "../../components/user/Sidebar";

function TodoListPage() {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <CreateTodoListForm/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default TodoListPage;