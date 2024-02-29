import { Component, OnInit } from '@angular/core';
import { RouteService } from '../route.service';
import { IGym } from '../../../entities/interfaces/IGym';
import { Router } from '@angular/router';
import { IRoute } from '../../../entities/interfaces/IRoute';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.page.html',
  styleUrls: ['./route-list.page.scss'],
})
export class RouteListPage {

  gym: IGym | null = null;

  constructor(
    private router: Router,
    private routeService: RouteService,
  ) { 
    this.gym = this.routeService.getGym();
  }

  public addRoute() {
    console.log('addRoute');
  }

  public viewRoute(route: IRoute) {
    this.routeService.setRoute(route);
    this.router.navigate(['route-detail']);
  }

}
