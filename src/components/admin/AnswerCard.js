import Swal from "sweetalert2";
import store from "../../app/store";
import { deleteAnswerById } from "../../features/answer/answerSlice";


const AnswerCard = ({ answer, setRefresh }) => {
    
    function handleDeleteAnswer() {
        Swal.fire({
            title: "Are you sure, you want to delete?",
            text: answer?.content,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                store.dispatch(deleteAnswerById(answer?.id)).then((res) => {
                    if (res?.payload) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        setRefresh(res?.payload)
                    }
                })
            }
        });
    }

    return (
        <div className={answer?.answerState === "CORRECT" ? "bg-success bg-opacity-10 p-2 hover-answer-card mt-3 rounded-3" : "bg-danger bg-opacity-10 p-2 hover-answer-card mt-3 rounded-3"}>
            <div className="d-flex justify-content-between">
                <p className="mt-3 ms-3">{answer?.content}</p>
                <div className="d-flex flex-row">
                    {answer?.answerState === "CORRECT" ? <i class="fa-solid fa-check text-success mt-4 me-3"></i> : <i class="fa-solid fa-xmark text-danger mt-4 me-3"></i>}
                    <span onClick={() => handleDeleteAnswer()} className="mt-3 me-3 delete-button" data-mdb-tooltip-init title="Remove"><i
                        className="fas fa-trash-alt fa-lg text-danger"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AnswerCard