import { Component } from '@angular/core';
import { navigate } from "utility-router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {


  goToSimulator() {

    const  path : string = `simulador`;
    navigate(path);
  }
  goToBasicData() {

    const  path : string = `documento`;
    navigate(path);
  }
}


