import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SLICES } from "../../constants/slices";
import answerServices from "../../api/services/answerServices";

const initialState = {
    answers: []
}

const answerSlice = createSlice({
    name: SLICES.ANSWER,
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(createAnswer.fulfilled, (state, action) => {
            state.answers = [...state.answers, action.payload]
        })
        .addCase(deleteAnswerById.fulfilled, (state, action) => {
            let afterDeleted = state.answers.filter(a => a.id !== action.payload.id)
            state.answers = [...afterDeleted]
        })
    }
});

export const createAnswer = createAsyncThunk(
    "/answer/create",
    async (data) => {
        const response = await answerServices.add(data)
        return response.data
    }
)

export const deleteAnswerById = createAsyncThunk(
    "/answer/delete",
    async (id) => {
        const response = await answerServices.remove(id)
        return response.data
    }
)

export default answerSlice.reducer;
