import Swal from "sweetalert2";
import { deleteChallengeById } from "../../features/challenge/challengeSlice";
import store from "../../app/store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const ChallengeCard = ({ challenge, setRefreshPage }) => {

    const navigate = useNavigate()

    function handleDeleteChallenge() {
        Swal.fire({
            title: "Are you sure, you want to delete?",
            text: challenge?.challengeName,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                store.dispatch(deleteChallengeById(challenge?.id)).then((res) => {
                    if (res?.payload) {
                        setRefreshPage(res?.payload)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    function handleStartChallenge() {
        Swal.fire({
            title: "Are you sure, you want to start?",
            text: challenge?.challengeName,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, start it!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`${ROUTES.CHALLENGE}/${challenge?.id}`)
            }
        });
    }

    return (
        <div className="card hover-card mt-4">
            <div className="card-header">
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <span className="ms-2 fw-bold fs-5">{challenge?.challengeName}</span>
                        <span className="badge bg-primary ms-3">{challenge?.difficulty}</span>
                        <span className="badge bg-info ms-2">{challenge?.challengeType}</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-clock fa-lg text-warning"></i>
                        <span className="ms-2 tm-3 ">{challenge?.duration}<label className="fst-italic">&nbsp; Seconds</label></span>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="text-center fw-bold fs-4">
                    {challenge?.topic?.name}
                </div>
            </div>
            <div className="card-footer">
                <div className="d-flex flex-row justify-content-between">
                <button onClick={() => handleStartChallenge()} className="btn btn-success">Start</button>
                <span onClick={() => handleDeleteChallenge()} data-mdb-tooltip-init title="Remove">
                    <i className="fas fa-trash-alt fa-lg text-danger mt-3 hide-update"></i>
                </span>
                </div>
            </div>
        </div>
    )
}

export default ChallengeCard;

