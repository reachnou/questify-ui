import { useState } from "react";
import AnswerCard from "./AnswerCard";
import Swal from "sweetalert2";
import { deleteQuestionById } from "../../features/question/questionSlice";
import store from "../../app/store";
import { createAnswer } from "../../features/answer/answerSlice";


const QuestionCard = ({ question, handlerSetIsUpdateQuestion, setRefresh, setFormDataQuestion }) => {
    const [isAddNewQuestion, setIsAddNewQuestion] = useState(false)
    const [formData, setFormData] = useState({
        content: '',
        answerState: '',
        questionId: question?.id,
    });


    const handlerSetIsAddNewQuestion = () => {
        setIsAddNewQuestion(current => !current)
    }

    function handleUpdateQuestion() {
        handlerSetIsUpdateQuestion()
        let data = {
            content: question?.content,
            difficulty: question?.difficulty,
            topicId: question?.id,
        }
        setFormDataQuestion(data)
        scrollToTop()
    }

    function scrollToTop() {
        // Scrolls smoothly to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function handleDeleteQuestion(question) {
        Swal.fire({
            title: "Are you sure, you want to delete?",
            text: question?.content,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                store.dispatch(deleteQuestionById(question?.id)).then((res) => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Data", formData);
        store.dispatch(createAnswer(formData)).then((res) => {
            if (res?.payload) {
                console.log("Res: ", res?.payload);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    content: '',
                    answerState: '',
                    questionId: question?.id,
                })
                setRefresh(res?.payload)
            }
        })
    };

    return (
        <div>
            <div class="card mt-2 mb-5 hover-card">
                <div class="card-header fw-bold">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span className="ms-2 fs-4">{question?.content}</span>
                            <span className="badge bg-primary ms-3 mb-2">{question?.difficulty}</span>
                        </div>
                        <div className="hide-update mt-2">
                            <span onClick={handlerSetIsAddNewQuestion} className="mt-2 me-3" data-mdb-tooltip-init title="Add new answer">
                                {isAddNewQuestion ? <i class="fas fa-xmark fa-lg text-danger"></i> : <i className="fas fa-plus fa-lg text-success"></i>}
                            </span>
                            <span onClick={() => handleUpdateQuestion()} className="mt-2 me-3" data-mdb-tooltip-init title="Edit question"><i
                                className="fas fa-pen-to-square fa-lg text-warning"></i>
                            </span>
                            <span onClick={() => handleDeleteQuestion(question)} className="mt-2 me-3" data-mdb-tooltip-init title="Remove question"><i
                                className="fas fa-trash-alt fa-lg text-danger"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    {isAddNewQuestion ?
                        <div>
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col">
                                    <div id="list1">
                                        <form onSubmit={handleSubmit}>
                                            <div class="pb-2">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row d-flex justify-content-between align-items-center">
                                                            <input type="text" class="form-control form-control-lg fs-5"
                                                                name="content"
                                                                value={formData.content}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Enter new answer here..." />
                                                        </div>
                                                        <hr />
                                                        <select className='form-select me-3 mt-3' style={{ width: "170px", height: "37px" }} name="answerState" value={formData.answerState} onChange={handleChange} required>
                                                            <option value="">Select Correctness</option>
                                                            <option value="CORRECT">CORRECT</option>
                                                            <option value="INCORRECT">INCORRECT</option>
                                                        </select>
                                                        <div className='float-end'>
                                                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-success">Add Answer</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ""}
                    <div>
                        {question?.answer.map((answer) => (
                            <AnswerCard key={answer.id} answer={answer} setRefresh={setRefresh} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default QuestionCard;