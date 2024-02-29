import { Injectable } from '@angular/core';
import { IGym } from '../../entities/interfaces/IGym';
import { IRoute } from '../../entities/interfaces/IRoute';
import { Gym } from '../../entities/classes/Gym';
import { Route } from '../../entities/classes/Route';
import { Video } from '../../entities/classes/Video';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  public gyms: IGym[] = [];

  public gym: IGym | null = null;
  public route: IRoute | null = null;

  constructor() { 
    if (!localStorage.getItem('gyms')) {
      this.loadData();
      localStorage.setItem('gyms', JSON.stringify(this.gyms));
    } else {
      this.gyms = JSON.parse(localStorage.getItem('gyms') || '[]');
    }

    this.gym = localStorage.getItem('gym') ? JSON.parse(localStorage.getItem('gym') || '{}') : null;
    this.route = localStorage.getItem('route') ? JSON.parse(localStorage.getItem('route') || '{}') : null;
  }

  public getGyms() {
    return this.gyms;
  }

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

  
  private loadData() {
    //Load test Data
    let gyms = [
      new Gym('Gaia', 'Marburg', 'assets/gyms/gaia_marburg.jpg'),
      new Gym('Dynochrom', 'Frankfurt', 'assets/gyms/dynochrom_frankfurt.jpeg'),
      new Gym('Boulderwelt', 'Frankfurt', 'assets/gyms/boulderwelt_frankfurt.jpg'),
      new Gym('Level 8', 'Gießen', 'assets/gyms/level8_giessen.jpg'),
    ];

    let routes = [
      new Route('assets/routes/route1.jpg', '6a', 'Green'),
      new Route('assets/routes/route2.jpg', '6b', 'Red'),
      new Route('assets/routes/route3.jpg', '6c', 'Green'),
      new Route('assets/routes/route4.jpg', '7a', 'Yellow'),
    ];

    let videos = [
      new Video('assets/videos/video1.mp4', [1200, 1800, 2600, 3800, 5400], 1, 'Max Mustermann'),
      new Video('assets/videos/video2.mp4', [1000, 1600, 2400, 3600, 5000], 2, 'Max Mustermann'),
      new Video('assets/videos/video3.mp4', [800, 1400, 2200, 3400, 4800], 3, 'Max Mustermann'),
      new Video('assets/videos/video4.mp4', [600, 1200, 2000, 3200, 4600], 4, 'Max Mustermann'),
      new Video('assets/videos/video5.mp4', [400, 1000, 1800, 3000, 4400], 5, 'Max Mustermann'),
      new Video('assets/videos/video6.mp4', [200, 800, 1600, 2800, 4200], 6, 'Max Mustermann'),
      new Video('assets/videos/video7.mp4', [0, 600, 1400, 2600, 4000], 7, 'Max Mustermann'),
      new Video('assets/videos/video8.mp4', [0, 400, 1200, 2400, 3800], 8, 'Max Mustermann'),
      new Video('assets/videos/video9.mp4', [0, 200, 1000, 2200, 3600], 9, 'Max Mustermann'),
      new Video('assets/videos/video10.mp4', [0, 0, 800, 2000, 3400], 10, 'Max Mustermann'),
      new Video('assets/videos/video11.mp4', [0, 0, 600, 1800, 3200], 11, 'Max Mustermann'),
      new Video('assets/videos/video12.mp4', [0, 0, 400, 1600, 3000], 12, 'Max Mustermann'),
    ];

    routes[0].videos = videos.slice(0, 3);
    routes[1].videos = videos.slice(0, 6);
    routes[2].videos = videos.slice(0, 12);

    gyms[0].routes = routes.slice(0, 2);
    gyms[1].routes = routes.slice(2, 4);
    gyms[2].routes = routes.slice(0, 4);

    console.log('loadData');
  }

  
}
