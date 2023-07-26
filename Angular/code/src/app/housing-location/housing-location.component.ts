import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
    selector: 'app-housing-location',
    templateUrl: './housing-location.component.html',
    styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
    // 感叹号称为非空断言运算符，它告诉 TypeScript 编译器此属性的值不能是 null 或 undefined。
    @Input()
    housingLocation!: HousingLocation;
}
