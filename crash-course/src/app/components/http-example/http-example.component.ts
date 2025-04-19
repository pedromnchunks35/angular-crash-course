import {Component, inject, signal, WritableSignal} from '@angular/core';
import {HttpServiceService} from '../../services/http/http-service.service';
import {post} from '../../model/post';
import {catchError} from 'rxjs';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  standalone: true,
  styleUrl: './http-example.component.css'
})
export class HttpExampleComponent {
  httpService: HttpServiceService = inject(HttpServiceService)
  posts: WritableSignal<post[]> = signal<Array<post>>([]);

  ngOnInit(): void {
    this.httpService.getPostsFromApi().pipe(
      catchError((err) => {
        console.log("ei")
        console.log(err)
        throw err;
      })).subscribe((posts) => {
      console.log("ei")
      this.posts.set(posts);
    });
  }
}
