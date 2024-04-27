// import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import store from "../../app/store";
import { getAllTopics } from "../../features/topic/topicSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function Dashboard() {
    const [topics, setTopic] = useState()
    const topicsStore = store.getState().topic.topics

    useEffect(() => {
        if (topicsStore.length === 0) {
            console.log("API");
            store.dispatch(getAllTopics()).then((res) => {
                setTopic(res?.payload)
            })
        } else {
            console.log("Store");
            setTopic(topicsStore)
        }
    }, [])
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10">
                    <h1 className="p-5">Admin Dashboard</h1>
                    <div className="d-flex flex-row flex-wrap">
                        <Link to={ROUTES.TOPIC}>
                            <div class="card hover-card shadow-lg ps-3 pe-3 text-bg-info mb-3 me-5" style={{ width: "18rem", height: "12rem" }}>
                                <div class="card-header fw-bold fs-5">Topics</div>
                                <div class="card-body text-center">
                                    <h1 class="card-title mt-3">{topics?.length}</h1>
                                </div>
                            </div>
                        </Link>
                        <Link to={ROUTES.CHALLENGE_IN_ADMIN}>
                            <div class="card hover-card shadow-lg ps-3 pe-3 text-bg-success mb-3 me-5" style={{ width: "18rem", height: "12rem" }}>
                                <div class="card-header fw-bold fs-5">Challenges</div>
                                <div class="card-body text-center">
                                    <h1 class="card-title mt-3">{topics?.length}</h1>
                                </div>
                            </div>
                        </Link>
                        <Link to={ROUTES.USER}>
                            <div class="card hover-card shadow-lg ps-3 pe-3 text-bg-warning mb-3" style={{ width: "18rem", height: "12rem" }}>
                                <div class="card-header fw-bold fs-5">Users</div>
                                <div class="card-body text-center">
                                    <h1 class="card-title mt-3">{topics?.length}</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Dashboard;