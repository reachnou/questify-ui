import Navbar from "../../components/Navbar";
import TopicDetailsForm from "../../components/admin/TopicDetailsForm";
import Sidebar from "../../components/admin/Sidebar";


function TopicDetailsPage() {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <TopicDetailsForm/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default TopicDetailsPage