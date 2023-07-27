import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';

import type { HousingLocation } from '../housinglocation';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);

    constructor() {
        this.housingLocationList = this.housingService.getAllHousingLocations()
    }
}
