import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
    selector: 'app-housing-location',
    templateUrl: './housing-location.component.html',
    styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
    /**
     * 感叹号: 感叹号称为非空断言运算符，它告诉 TypeScript 编译器此属性的值不能是 null 或 undefined。
     * @Input：通过Input装饰器声明这个属性是输入属性，模板可以通过这个属性做数据绑定。
     */
    @Input()
    housingLocation!: HousingLocation;
}
