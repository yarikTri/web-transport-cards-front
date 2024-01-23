import axios from 'axios';

interface Route {
  id: string;
  name: string;
  start_time: string;
  end_time: string;
  interval_minutes: number;
  start_station: string;
  end_station: string;
  capacity: number;
  description: string;
  image_uuid: string;
}

interface Ticket {
  id: number;
  create_time: string;
  form_time: string | null;
  end_time: string | null;
  state: string;
  write_state: string | null;
  creator_id: number;
  moderator_id: number | null;
  routes: Route[];
}

export async function getTicketById(id: string): Promise<Ticket | null> {
  try {
    const response = await axios.get<Ticket>(`http://localhost:8080/tickets/${id}`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      return response.data;
    }
    console.error(`Failed to fetch ticket. Status: ${response.status}`);
  } catch (error) {
    console.error('Error fetching ticket:', error);
  }
  return null;
}

export default getTicketById;
