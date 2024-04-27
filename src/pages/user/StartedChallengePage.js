import { useEffect, useState } from "react";
import store from "../../app/store";
import { getRandomQuestionByTopicId } from "../../features/question/questionSlice";
import { useParams } from "react-router-dom";
import { getChallengesByHostId } from "../../features/challenge/challengeSlice";
import { userDetails } from "../../api/auth";
import FlashCardPage from "./FlashCardPage";

function StartedChallengePage() {
    const { id } = useParams()
    const [questions, setQuestions] = useState()
    const [challengs, setChallenges] = useState()
    const [challeng, setChallenge] = useState()
    const [score, setScore] = useState(0)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const challengesStore = store.getState().challenge.challenges

    useEffect(() => {
        if (challengesStore.length === 0) {
            console.log("API");
            store.dispatch(getChallengesByHostId(userDetails.id)).then((res) => {
                setChallenges(res?.payload)
                const challenge = res?.payload?.find(c => c.id == id)
                console.log("C:", challenge);
                setChallenge(challenge)
                store.dispatch(getRandomQuestionByTopicId(challenge?.topic?.id)).then((res) => {
                    if (res?.payload) {
                        setQuestions(res?.payload)
                    }
                })
            })
        } else {
            console.log("Store");
            setChallenges(challengesStore)
            const challenge = challengesStore?.find(c => c.id == id)
            console.log("C:", challenge);
            setChallenge(challenge)
            store.dispatch(getRandomQuestionByTopicId(challenge?.topic?.id)).then((res) => {
                if (res?.payload) {
                    setQuestions(res?.payload)
                }
            })
        }
    }, [])

    useEffect(() => {
        if (challeng !== undefined) {
            if (currentQuestionIndex >= 10) {
                return;
            }

            const timer = setTimeout(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            }, (challeng?.duration * 1000));

            return () => {
                clearTimeout(timer);
            };
        }

    }, [currentQuestionIndex, challeng]);

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div>
                <h1 className="text-center">{challeng?.challengeName}</h1>
                <h3 className="text-center">Topic: {challeng?.topic?.name}</h3>
                {currentQuestionIndex + 1 === 11 ?
                    <div>
                        <h3 className="text-center">Your score is {score}/10</h3>
                    </div> :
                    <div>
                        <h4>Question {currentQuestionIndex + 1}</h4>
                        {questions ? <FlashCardPage key={questions[currentQuestionIndex]?.id} question={questions[currentQuestionIndex]} score={score} setScore={setScore}/> : ""}
                    </div>
                }

            </div>
        </div>
    );
}

export default StartedChallengePage