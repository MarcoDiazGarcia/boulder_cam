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

  gyms: IGym[];

  constructor(
    private router: Router,
    private routeService: RouteService,
  ) {
    this.gyms = this.routeService.getGyms();
  }

  public addGym() {
    console.log('addGym');
  }

  public viewGym(gym: IGym) {
    console.log('viewGym');
    this.routeService.setGym(gym);
    this.router.navigate(['route-list']);
  }
}
