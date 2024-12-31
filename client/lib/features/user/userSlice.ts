import { getAllUsers, registerUser, UserData } from "@/lib/api/userService";
import { createAppSlice } from "@/lib/createAppSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface UserState {
    users: any[]
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

// Async Thunk
export const registerNewUser = createAsyncThunk('user/register', async (userData: UserData) => {
    const response = await registerUser(userData)
    return response
})

export const fetchAllUsers = createAsyncThunk('user/getAllUsers', async () => {
    const response = await getAllUsers()
    return response.users
})

// Slice
export const userSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(registerNewUser.pending, state => {
                state.loading = true
            })
            .addCase(registerNewUser.fulfilled, (state, action) => {
                state.loading = false
                state.users.push(action.payload.user)
            })
            .addCase(registerNewUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message as string
            })
            .addCase(fetchAllUsers.pending, state => {
                state.loading = true
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message as string
            })
    },
})

export const {
} = userSlice.actions

export default userSlice.reducer