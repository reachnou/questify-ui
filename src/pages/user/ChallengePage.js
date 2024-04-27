// import Footer from "../components/Footer";
import Navbar from "../../components/Navbar";
import CreateChallengeForm from "../../components/user/CreateChallengeForm";
import Sidebar from "../../components/user/Sidebar";

function ChallengePage() {
    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10">
                    <CreateChallengeForm/>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default ChallengePage;