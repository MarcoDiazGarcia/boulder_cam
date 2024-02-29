import { Injectable } from '@angular/core';
import { IGym } from '../../entities/interfaces/IGym';
import { IRoute } from '../../entities/interfaces/IRoute';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  gym: IGym | null = null;
  route: IRoute | null = null;

  constructor() { }

  public setGym(gym: IGym) {
    this.gym = gym;
  }

  public getGym() {
    return this.gym;
  }

  public clearGym() {
    this.gym = null;
  }

  public addRoute(route: IRoute) {
    if (this.gym) {
      this.gym.routes?.push(route);
    }
  }

  public setRoute(route: IRoute) {
    this.route = route;
  }

  public getRoute() {
    return this.route;
  }

  public clearRoute() {
    this.route = null;
  }
  
}
