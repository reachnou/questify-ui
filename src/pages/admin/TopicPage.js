import Navbar from "../../components/Navbar";
import CreateTopicForm from "../../components/admin/CreateTopicForm";
import Sidebar from "../../components/admin/Sidebar";

function TopicPage() {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <CreateTopicForm/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default TopicPage;