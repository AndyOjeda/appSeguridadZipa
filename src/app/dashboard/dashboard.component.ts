import { Component } from '@angular/core';
import { SliderbarComponent } from "../Shared/sliderbar/sliderbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SliderbarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
