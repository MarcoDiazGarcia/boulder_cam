import { last } from "rxjs";
import { IGym } from "../interfaces/IGym";
import { IRoute } from "../interfaces/IRoute";

import * as uuid from 'uuid';

export class Gym implements IGym {
    id: string;
    name: string;
    city: string;
    imagePath: string;
    lastVisited: Date;
    routes: IRoute[];

    get routeCount() {
        return this.routes.length;
    }

    constructor(name: string, city: string, imagePath: string) {
        this.id = uuid.v4();
        this.name = name;
        this.city = city;
        this.imagePath = imagePath;
        this. lastVisited = new Date();
        this.routes = [];
    }

    public addRoute(route: IRoute) {
        this.routes.push(route);
    }
}