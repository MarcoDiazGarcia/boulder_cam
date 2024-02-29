import { Component, OnInit } from '@angular/core';
import { IRoute } from '../../../entities/interfaces/IRoute';
import { RouteService } from '../route.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.page.html',
  styleUrls: ['./route-detail.page.scss'],
})
export class RouteDetailPage {

  route: IRoute | null = null;

  constructor(
    private routeService: RouteService,
  ) { 
    this.route = this.routeService.getRoute();
  }

}
