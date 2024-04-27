// import Footer from "../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/admin/Sidebar";

function ChallengePage() {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <h1>ChallengePage</h1>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default ChallengePage;