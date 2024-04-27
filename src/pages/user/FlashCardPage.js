import AnswerCard from "../../components/admin/AnswerCard";
import AnswerCardInChallenge from "../../components/user/AnswerCardInChallenge";

function FlashCardPage({question, score, setScore}) {
    return (
        <div style={{width: "800px"}}>
            <div class="card mt-2 mb-5">
                <div class="card-header fw-bold">
                    <div className="d-flex justify-content-between">
                        <span className="ms-2 fs-4">{question?.content}</span>
                        <span className="badge text-bg-primary text-wrap">{question?.difficulty}</span>
                    </div>
                </div>
                <div class="card-body">
                    <div>
                        {question?.answer.map((answer) => (
                            <AnswerCardInChallenge key={answer.id} answer={answer} score={score} setScore={setScore}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashCardPage;