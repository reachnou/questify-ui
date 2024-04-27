import { useEffect, useState } from "react";
import store from "../../app/store";
import { getAllTopics } from "../../features/topic/topicSlice";
import { userDetails } from "../../api/auth";
import { createChallenge, getChallengesByHostId } from "../../features/challenge/challengeSlice";
import Swal from "sweetalert2";
import ChallengeCard from "./ChallengeCard";


const CreateChallengeForm = () => {
    const [isUpdate, setIsUpdate] = useState("false");
    const [refreshPage, setRefreshPage] = useState()
    const [taskId, setTaskId] = useState();
    const [formData, setFormData] = useState({
        challengeName: '',
        duration: '',
        challengeType: '',
        difficulty: '',
        challengeStatus: 'NOT_YET_START',
        hostId: userDetails.id,
        topicId: ''
    });
    const [topics, setTopic] = useState()
    const topicsStore = store.getState().topic.topics
    const [challengs, setChallenges] = useState()
    const challengesStore = store.getState().challenge.challenges

    useEffect(() => {
        if (topicsStore.length === 0 || challengesStore.length === 0) {
            console.log("API");
            store.dispatch(getAllTopics()).then((res) => {
                setTopic(res?.payload)
            })
            store.dispatch(getChallengesByHostId(userDetails.id)).then((res) => {
                setChallenges(res?.payload)
            })
        } else {
            console.log("Store");
            setTopic(topicsStore)
            setChallenges(challengesStore)
        }

    }, [refreshPage])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data: ", formData);
        if (isUpdate === "true") {
            // store.dispatch(updateTask({ id: taskId, data: formData })).then((res) => {
            //     if (res?.payload) {
            //         Swal.fire({
            //             position: "center",
            //             icon: "success",
            //             title: "Your work has been saved",
            //             showConfirmButton: false,
            //             timer: 1500
            //         });
            //         setIsUpdate("false")
            //         setRefreshPage(res?.payload)
            //         setFormData({
            //             name: '',
            //             description: '',
            //             deadline: '',
            //             priority: '',
            //             status: 'TODO'
            //         })
            //     }
            // })

        } else {
            store.dispatch(createChallenge(formData)).then((res) => {
                if (res?.payload) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setRefreshPage(res?.payload)
                    setFormData({
                        challengeName: '',
                        duration: '',
                        challengeType: '',
                        difficulty: '',
                        challengeStatus: 'NOT_YET_START',
                        hostId: userDetails.id,
                        topicId: ''
                    })
                }
            })
        }
    };
    return (
        <div>
            <section>
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div id="list1">
                                <div class="card-body py-4 px-4 px-md-5">

                                    <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                        <i class="fas fa-check-square me-1"></i>
                                        <u>My Challenges</u>
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <div class="pb-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <div class="row d-flex justify-content-between align-items-center">
                                                        <input type="text" class="form-control form-control-lg fs-3"
                                                            name="challengeName"
                                                            value={formData.challengeName}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder="Title" />
                                                        <hr />
                                                        <div className='d-flex flex-row'>
                                                            <select className='form-select me-3 mt-3' style={{ width: "160px", height: "37px" }} name="challengeType" value={formData.challengeType} onChange={handleChange} required>
                                                                <option value="">Mode</option>
                                                                <option value="SOLO">SOLO</option>
                                                                <option value="PAIR">PAIR</option>
                                                                <option value="GROUP">GROUP</option>
                                                            </select>
                                                            <select className='form-select me-3 mt-3' style={{ width: "160px", height: "37px" }} name="difficulty" value={formData.difficulty} onChange={handleChange} required>
                                                                <option value="">Difficulty</option>
                                                                <option value="EASY">EASY</option>
                                                                <option value="MEDIUM">MEDIUM</option>
                                                                <option value="HIGH">HIGH</option>
                                                            </select>
                                                            <select className='form-select me-3 mt-3' style={{ width: "160px", height: "37px" }} name="topicId" value={formData.topicId} onChange={handleChange} required>
                                                                <option value="">Topic</option>
                                                                {topics?.map((topic) => (
                                                                    <option key={topic.id} value={topic.id}>{topic.name}</option>
                                                                ))}
                                                            </select>
                                                            <input type="number" class="form-control form-control-lg border mt-3" style={{ width: "110px", height: "37px" }}
                                                                name="duration"
                                                                value={formData.duration}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder='Delay' />
                                                            <label className="mt-4 ms-2 fst-italic">Seconds</label>
                                                        </div>
                                                    </div>
                                                    <div className='float-end'>
                                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className={isUpdate === 'true' ? "btn btn-warning" : "btn btn-success"}>{isUpdate === 'true' ? "Update" : "Add Challenge"}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <hr class="my-4" />

                                    <div class="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                                        <p class="small mb-0 me-2 text-muted">Filter</p>
                                        <select data-mdb-select-init>
                                            <option value="1">All</option>
                                            <option value="2">Completed</option>
                                            <option value="3">Active</option>
                                            <option value="4">Has due date</option>
                                        </select>
                                        <p class="small mb-0 ms-4 me-2 text-muted">Sort</p>
                                        <select data-mdb-select-init>
                                            <option value="1">Added date</option>
                                            <option value="2">Due date</option>
                                        </select>
                                        <a href="#!" style={{ color: "#23af89" }} data-mdb-tooltip-init title="Ascending"><i
                                            class="fas fa-sort-amount-down-alt ms-2"></i></a>
                                    </div>
                                    <div className="container row row-cols-1 ">
                                        {challengs?.map((challenge) => (
                                            <ChallengeCard key={challenge.id} challenge={challenge} setRefreshPage={setRefreshPage} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreateChallengeForm