import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }        from './dashboard.component';
import { CesiumComponent }        from './cesium.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
            path: 'heroes',
            component: HeroesComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
	  {
        path: 'cesium',
        component: CesiumComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      
     

   ])
  ],
  declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
		CesiumComponent,
        HeroesComponent
		
    ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
