import { Component } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";
import * as AOS from "aos"; //AOS - 1

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    AOS.init();
    this.title.setTitle("Home | Green & Gold");
    this.meta.updateTag({ name: "description", content: "" });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
}
