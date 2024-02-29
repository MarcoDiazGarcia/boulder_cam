import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RouteDetailPageRoutingModule } from './route-detail-routing.module';

import { RouteDetailPage } from './route-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouteDetailPageRoutingModule
  ],
  declarations: [RouteDetailPage]
})
export class RouteDetailPageModule {}
