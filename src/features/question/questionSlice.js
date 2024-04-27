import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { SLICES } from '../../constants/slices';
import questionServices from '../../api/services/questionService';

const initialState = {
    questions: [],
    randomQuestions: [], 
}

export const questionSlice = createSlice({
    name: SLICES.QUESTION,
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(createQuestion.fulfilled, (state, action) => {
            state.questions = [...state.questions, action.payload]
        })
        .addCase(deleteQuestionById.fulfilled, (state, action) => {
            let afterDeleted = state.questions.filter(q => q.id !== action.payload.id)
            state.questions = [...afterDeleted]
        })
        .addCase(getRandomQuestionByTopicId.fulfilled, (state, action) => {
            state.randomQuestions = action.payload
        })
    }
});

export const createQuestion = createAsyncThunk(
    "/question/create",
    async (data) => {
        const response = await questionServices.add(data)
        return response.data
    }
)

export const deleteQuestionById = createAsyncThunk(
    "/question/delete",
    async (id) => {
        const response = await questionServices.remove(id)
        return response.data
    }
)

export const getRandomQuestionByTopicId = createAsyncThunk(
    "/question/getRandom",
    async (topicId) => {
        const response = await questionServices.getRandomQuestionByTopicId(topicId)
        return response.data
    }
)

export default questionSlice.reducer