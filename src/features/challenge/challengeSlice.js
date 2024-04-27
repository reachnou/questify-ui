import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SLICES } from "../../constants/slices";
import challengeServices from "../../api/services/challengeServices";

const initialState = {
    challenges: []
}

const challengeSlice = createSlice({
    name: SLICES.CHALLENGE,
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(createChallenge.fulfilled, (state, action) => {
            state.challenges = [...state.challenges, action.payload]
        })
        .addCase(getChallengesByHostId.fulfilled, (state, action) => {
            state.challenges = action.payload
        })
        .addCase(deleteChallengeById.fulfilled, (state, action) => {
            let afterDeleted = state.challenges.filter(c => c.id !== action.payload.id)
            state.challenges = [...afterDeleted]
        })
    }
});

export const createChallenge = createAsyncThunk(
    "/challenge/create",
    async (data) => {
        const response = await challengeServices.add(data)
        return response.data
    }
)

export const getChallengesByHostId = createAsyncThunk(
    "/challenge/getChallengesByHostId",
    async (userId) => {
        const response = await challengeServices.getAllChallengsByUserId(userId)
        return response.data
    }
)

export const deleteChallengeById = createAsyncThunk(
    "/challenge/delete",
    async (id) => {
        const response = await challengeServices.remove(id)
        return response.data
    }
)

export default challengeSlice.reducer;
