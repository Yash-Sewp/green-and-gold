import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from "@angular/platform-browser";
import * as AOS from "aos"; //AOS - 1

@Component({
  selector: 'app-strain',
  templateUrl: './strain.component.html',
  styleUrls: ['./strain.component.scss']
})
export class StrainComponent {
  slug: any = null;
  strainObj: any = null;
  product = [
    {
      "strain": "Indoor",
      "level": [
        "AAA",
        "AA",
        "A"
      ],
      "img": "assets/images/indoor.jpg"
    },
    {
      "strain": "Outdoor",
      "level": [
        "A"
      ],
      "img": "assets/images/outdoor.jpg"
    },
    {
      "strain": "Green House",
      "level": [
        "Premium",
        "Standard"
      ],
      "img": "assets/images/greenhouse.jpg"
    }
  ];

  constructor(private _activatedRouter: ActivatedRoute, private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.slug = this._activatedRouter.snapshot.paramMap.get('slug');
    AOS.init();
    this.title.setTitle(this.slug + " | Green & Gold");
    this.meta.updateTag({ name: "description", content: "" });
    this.getStrainDetails();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  getStrainDetails() {
    this.product.find((item: any, index: any) => {
      if (item.strain == this.slug) {
        this.strainObj = item;
        console.log(this.strainObj);
      }
    });
  }


}
