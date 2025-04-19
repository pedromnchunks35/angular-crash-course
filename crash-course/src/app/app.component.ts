import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from './components/parent/parent.component';
@Component({
  // SELECTOR IS THE HTML COMPONENT THAT WE PUT ON THE APP LIKE <app-root></app-root>
  selector: 'app-root',
  imports: [RouterOutlet,BodyComponent,HeaderComponent,ParentComponent],
  // Template is what the component should actually render. We can use templateUrl or template but the templateUrl is better because we can point to some file
  templateUrl: './app.component.html',
  // This exists for us to be enabled to use imports
  standalone: true,
  // Where our css is located, same as templateUrl we can use style instead of url but url it's better for segregating files
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crach-course';
}
