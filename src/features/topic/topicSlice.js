import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { SLICES } from '../../constants/slices';
import topicServices from '../../api/services/topicService';

const initialState = {
    topics: [],
}

export const topicSlice = createSlice({
    name: SLICES.TOPIC,
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllTopics.fulfilled, (state, action) => {
            state.topics = action.payload
        })
        .addCase(createTopic.fulfilled, (state, action) => {
            state.topics = [...state.topics, action.payload]
        })
    }
});

export const getAllTopics = createAsyncThunk(
    "/tasks/getAllTopics",
    async () => {
        const response = await topicServices.getAll()
        return response.data
    }
)

export const createTopic = createAsyncThunk(
    "/topic/create",
    async (data) => {
        const response = await topicServices.add(data)
        return response.data
    }
)

export const getTopicById = createAsyncThunk(
    "/topic/getTopicById",
    async (id) => {
        const response = await topicServices.getById(id)
        return response.data
    }
)

export default topicSlice.reducer