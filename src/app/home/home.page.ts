import { Component } from '@angular/core';
import { IGym } from '../../entities/interfaces/IGym';
import { Gym } from '../../entities/classes/Gym';
import { IRoute } from '../../entities/interfaces/IRoute';
import { Route } from '../../entities/classes/Route';
import { Router } from '@angular/router';
import { RouteService } from '../route/route.service';
import { IVideo } from '../../entities/interfaces/IVideo';
import { Video } from '../../entities/classes/Video';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gyms?: IGym[];
  routes?: IRoute[];
  videos?: IVideo[];

  constructor(
    private router: Router,
    private routeService: RouteService 
  ) {
    this.loadData();
  }

  public addGym() {
    console.log('addGym');
  }

  public viewGym(gym: IGym) {
    console.log('viewGym');
    this.routeService.setGym(gym);
    this.router.navigate(['route-list']);
  }

  private loadData() {
    //Load test Data
    this.gyms = [
      new Gym('Gaia', 'Marburg', 'assets/gyms/gaia_marburg.jpg'),
      new Gym('Dynochrom', 'Frankfurt', 'assets/gyms/dynochrom_frankfurt.jpeg'),
      new Gym('Boulderwelt', 'Frankfurt', 'assets/gyms/boulderwelt_frankfurt.jpg'),
      new Gym('Level 8', 'Gießen', 'assets/gyms/level8_giessen.jpg'),
    ];

    this.routes = [
      new Route('assets/routes/route1.jpg', '6a', 'Green'),
      new Route('assets/routes/route2.jpg', '6b', 'Red'),
      new Route('assets/routes/route3.jpg', '6c', 'Green'),
      new Route('assets/routes/route4.jpg', '7a', 'Yellow'),
    ];

    this.videos = [
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

    this.routes[0].videos = this.videos.slice(0, 3);
    this.routes[1].videos = this.videos.slice(0, 6);
    this.routes[2].videos = this.videos.slice(0, 12);

    this.gyms[0].routes = this.routes.slice(0, 2);
    this.gyms[1].routes = this.routes.slice(2, 4);
    this.gyms[2].routes = this.routes.slice(0, 4);

    console.log('loadData');
  }

}
