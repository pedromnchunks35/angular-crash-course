import {Component, signal} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [RouterLink],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  standalone: true
})
export class BodyComponent {
  someValue = signal("Some value");
  nonSignal = "something";
}
