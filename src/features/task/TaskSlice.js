import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { SLICES } from '../../constants/slices';
import taskServices from '../../api/services/taskServices';

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: SLICES.TASK,
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getTaskByUserId.fulfilled, (state, action) => {
            state.tasks = action.payload
        })
        .addCase(createTask.fulfilled, (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        })
        .addCase(deleteTaskById.fulfilled, (state, action) => {
            let afterDeleted = state.tasks.filter(task => task.id !== action.payload.id)
            state.tasks = [...afterDeleted]
        })
        .addCase(updateTask.fulfilled, (state, action) => {
            let afterDeleted = state.tasks.filter(task => task.id !== action.payload.id)
            state.tasks = [...afterDeleted, action.payload]
        })
    }
});

export const getTaskByUserId = createAsyncThunk(
    "/tasks/getAllTasksByUserId",
    async (userId) => {
        const response = await taskServices.getAllTasksByUserId(userId)
        return response.data
    }
)

export const createTask = createAsyncThunk(
    "/tasks/create",
    async (data) => {
        const response = await taskServices.createTask(data)
        return response.data
    }
)

export const deleteTaskById = createAsyncThunk(
    "/tasks/delete",
    async (id) => {
        const response = await taskServices.remove(id)
        return response.data
    }
)

export const updateTask = createAsyncThunk(
    "/tasks/updateTask",
    async ({id, data}) => {
        const response = await taskServices.update(id, data)
        return response.data
    }
)

export default taskSlice.reducer