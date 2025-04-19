import {Component, inject, input, OnInit, signal, WritableSignal} from '@angular/core';
import {SomeServiceService} from '../../services/some-service.service';
import {item} from '../../model/item';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  standalone: true,
  providers: [SomeServiceService]
})
export class ChildComponent implements OnInit {
  message = input('Something from the father')

  keyUpHandler(): void {
    console.log("you just clicked something bro");
  }

  todoService: SomeServiceService = inject(SomeServiceService)
  items: WritableSignal<item[]> = signal<Array<item>>([]);

  ngOnInit(): void {
    this.items.set(this.todoService.items);
  }
}
