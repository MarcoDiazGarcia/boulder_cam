import { IRoute } from "./IRoute";

export interface IGym {
    id: string;
    name: string;
    city: string;
    imagePath: string;
    lastVisited: Date;
    routes: IRoute[];

    get routeCount(): number;
}
