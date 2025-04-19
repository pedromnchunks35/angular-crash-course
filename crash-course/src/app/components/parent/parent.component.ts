import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  imports: [ChildComponent],
  selector: 'app-parent',
  standalone: true,
  styleUrl: './parent.component.css',
  templateUrl: './parent.component.html'
})
export class ParentComponent {

}
