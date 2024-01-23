import axios from 'axios';

// interface UserModel {
//   id: number;
//   name: string;
// }

// interface ModeratorModel {
//   id: number;
//   name: string;
// }

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

interface TicketData {
  people_per_minute: number;
  time_interval: number;
  date_application_create: string;
  date_application_accept: string | null;
  date_application_complete: string | null;
  status_application: string;
}

interface Ticket {
  id: number;
  ticket_data: TicketData;
  creator_id: number;
  moderator_id: number;
  routes: Route[];
}

export async function getTicketById(id: string): Promise<Ticket | null> {
  try {
    const response = await axios.get<Ticket>(`http://localhost:8080/tickets/${id}/`, {
      withCredentials: true,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Failed to fetch ticket. Status: ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching ticket:', error);
    return null;
  }
}

export default getTicketById;
