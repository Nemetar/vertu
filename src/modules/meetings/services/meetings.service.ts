import axios from 'axios';
import { Meeting } from '../models/meetings.model';

export async function getMeetings(): Promise<Meeting[]> {
  const response = await axios.get('/api/meetings');
  return Array.from({ length: 100 }, (_, index) => ({
    id: index.toString(),
    title: 'Meeting',
    description: 'Description',
    imageUrl: 'https://via.placeholder.com/150',
    organizer: 'Organizer',
    currentPeople: 24,
    maxPeople: 100,
    duration: 120,
    startDate: new Date(),
    endate: new Date(),
  }));
  return response.data;
}
