import axios from 'axios';
import { Meeting } from '../models/meetings.model';

export async function getMeetings(): Promise<Meeting[]> {
  const response = await axios.get('/api/meetings');
  return response.data;
}
