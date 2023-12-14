import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent {
  @Input() title: string = '';
  @Input() img: string = '';
}
