import axios from 'axios';
import { UserRegisterDTO, RegisteredUser } from '../models/user.model';

export async function register(user: UserRegisterDTO): Promise<RegisteredUser> {
  const response = await axios.post<RegisteredUser>('/api/register', user);
  return response.data;
}
