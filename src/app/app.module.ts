import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UsersComponent } from './admin/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RestaurantDetailComponent} from "./restaurants/restaurantDetails/restaurant-detail.component";

const routes: Routes = [
  {path : '', component: RestaurantsComponent},
  {path : 'admin/users', component : UsersComponent},
  {path : 'restaurants',component: RestaurantsComponent},
  {path : '404', component : PageNotFoundComponent},
  {path : '**', redirectTo : '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RestaurantsComponent,
    UsersComponent,
    PageNotFoundComponent,
    RestaurantDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
