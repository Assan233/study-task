import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideRouter } from '@angular/router';

import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import routeConfig from './routes';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HousingLocationComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [
        provideRouter(routeConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
