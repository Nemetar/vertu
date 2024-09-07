import axios from 'axios';
import { UserLoginDTO, LoginResponse } from '../models/auth.model';

export async function login(user: UserLoginDTO): Promise<LoginResponse> {
    const response = await axios.post<LoginResponse>('/api/login', user);
    return response.data;
}

export async function logout() {
    await axios.post('/api/logout');
}
