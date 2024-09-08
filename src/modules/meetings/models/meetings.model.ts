export interface Meeting {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  organizer: string;
  currentPeople: number;
  maxPeople: number;
  duration: number;
  startDate: Date;
  endate: Date;
}
