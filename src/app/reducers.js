import {combineReducers} from "redux";
import taskReducer from "../features/task/TaskSlice"
import topicReducer from "../features/topic/topicSlice"
import questionReducer from "../features/question/questionSlice"
import answerReducer from "../features/answer/answerSlice"
import challengeReducer from "../features/challenge/challengeSlice"

export const rootReducer = combineReducers({
    task: taskReducer,
    topic: topicReducer,
    question: questionReducer,
    answer: answerReducer,
    challenge: challengeReducer
})