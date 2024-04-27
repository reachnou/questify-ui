import { useState } from "react"



const AnswerCardInChallenge = ({ answer, score, setScore }) => {
    const [isChange, setIsChange] = useState(false)
    function handleChooseAnswer(chosenAnswer) {
        if (chosenAnswer === "CORRECT") {
            score = score + 1
            setScore(score)
            setIsChange(Boolean(true))
        } else {
            if (isChange === "true") {
                score = score - 1
                setScore(score)
            }

        }
        // console.log("Answer : ", answer?.id, answer?.answerState, chosenAnswer);
    }
    return (
        <div onClick={() => handleChooseAnswer(answer?.answerState)} className="p2 mt-3 rounded-3 border hover-card">
            <div className="d-flex justify-content-between">
                <p className="mt-3 ms-3">{answer?.content}</p>
            </div>
        </div>
    )
}

export default AnswerCardInChallenge