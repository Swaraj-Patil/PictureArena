import API from "./axiosInstance";

export interface UserData {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (userData: UserData) => {
    const response = await API.post('/api/v1/users', userData)
    return response.data
}

export const getAllUsers = async () => {
    const response = await API.get('/api/v1/admin/users')
    return response.data
}