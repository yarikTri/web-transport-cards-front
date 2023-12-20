import { getRouteImage } from './get-routes';

export interface RouteResp {
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

export interface Route {
    name: string;
    start_time: string;
    end_time: string;
    interval_minutes: number;
    start_station: string;
    end_station: string;
    capacity: number;
    description: string;
    image: string;
}

const mockRoute: Route = {
    name: 'Автобус в Рыбинске, приезжающий вовремя',
    start_time: "05:00",
    end_time: "23:00",
    interval_minutes: 10,
    start_station: "Ворошилова",
    end_station: "Мариевка",
    capacity: 70,
    description: 'Не существует в природе',
    image: '/default_bus.jpeg',
};

export const getDetailedRoute = async (id: number): Promise<Route> => {
    try {
        const response = await fetch(`http://localhost:8080/routes/${id}`, {
            method: 'GET',
        });
        if (!response.ok) {
            return mockRoute;
        }
        const data: RouteResp = await response.json();

        const image = await getRouteImage(data.image_uuid);
        const route: Route = {
            ...data,
            image: image,
        };

        return route;
    } catch (error) {
        return mockRoute;
    }
}
