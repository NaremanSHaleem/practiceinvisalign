import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-our-patients-say',
  templateUrl: './our-patients-say.component.html',
  styleUrls: ['./our-patients-say.component.scss']
})
export class OurPatientsSayComponent implements OnInit {

  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {

    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

   }

  ngOnInit() {
  }

}
