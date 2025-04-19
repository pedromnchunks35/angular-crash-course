import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {post} from '../../model/post';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  http: HttpClient = inject(HttpClient)

  getPostsFromApi() {
    const url: string = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Array<post>>(url);
  }
}
