export interface RouteResp {
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

export interface Route {
    id: string;
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

const routeMocks: Route[] = [
    {
        id: "1",
        name: 'Автобус №12',
        start_time: "05:00",
        end_time: "23:00",
        interval_minutes: 10,
        start_station: "Ворошилова",
        end_station: "Мариевка",
        capacity: 70,
        description: "Описание автобуса 12",
        image: '/default_bus.jpeg',
    },
    {
        id: "2",
        name: 'Автобус №3',
        start_time: "05:00",
        end_time: "23:00",
        interval_minutes: 10,
        start_station: "Ворошилова",
        end_station: "Мариевка",
        capacity: 70,
        description: "Описание автобуса 3",
        image: '/default_bus.jpeg',
    },
    {
        id: "3",
        name: 'Троллейбус №6',
        start_time: "05:00",
        end_time: "23:00",
        interval_minutes: 10,
        start_station: "Ворошилова",
        end_station: "Мариевка",
        capacity: 70,
        description: "Описание троллейбуса 6",

        image: '/default_bus.jpeg',
    },
];

export const getRoutes = async (name = ''): Promise<Route[]> => {
    try {
        const response = await fetch(`http://localhost:8080/routes/search?route=${name}`, {
            method: 'GET',
        });

        if (response.ok) {
            const routesResp: RouteResp[] = await response.json();

            const routes: Route[] = [];

            for (const route of routesResp) {
                routes.push({
                    id: route.id,
                    name: route.name,
                    start_time: route.start_time,
                    end_time: route.end_time,
                    interval_minutes: route.interval_minutes,
                    start_station: route.start_station,
                    end_station: route.end_station,
                    capacity: route.capacity,
                    description: route.description,
                    image: await getRouteImage(route.image_uuid),
                });
            }      

            return routes;
        } else {
            return routeMocks;
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return routeMocks;
    }
}

export async function getRouteImage(imageUUID: string): Promise<string> {
    try {
        const response = await fetch(`http://localhost:9000/images/${imageUUID}`, {
            method: 'GET',
        });

        if (response.ok) {
            const imageBuffer = await response.arrayBuffer();
            const base64String = arrayBufferToBase64(imageBuffer);
            return `data:image/jpeg;base64,${base64String}`;
        } else {
            return '/default_bus.jpeg';
        }
    } catch (error) {
        console.error(`Ошибка получения изображения с uuid ${imageUUID}: ${error}`);
        return '/logo.png';
    }
}

function arrayBufferToBase64(arrayBuffer: ArrayBuffer): string {
    const binaryArray = new Uint8Array(arrayBuffer);
    const binaryString = String.fromCharCode(...binaryArray);
    const base64String = btoa(binaryString);
    return base64String;
}
