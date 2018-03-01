import { Component, OnInit } from '@angular/core';
import { Workoutcategory } from '../workoutcategory';
import { InfoService } from '../info.service';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  workoutCategory: Workoutcategory = {
    id: 1,
    name: 'Joe'
  }
  posts: Array<any> = []      // posts array
  page: any = 1               // page number
  perPage: any = 20           // per page of posts
  hasMorePost: any = true     // has more posts
  isLoadingPosts: any = false // is loading new posts
  error: any = null           // post error message
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.loadMoreComments.bind(this));
    this.fetchPosts();
  }
  fetchPosts() {
    if(this.hasMorePost && !this.isLoadingPosts) {
      this.isLoadingPosts = true;
      this.infoService.getInfo('/api/v1/forum/posts', {
        page: this.page,
        per_page: this.perPage
      }).subscribe(response => {
        this.isLoadingPosts = false;
        if(response.body) {
          this.posts = [].concat(this.posts, response.body);
          this.hasMorePost = this.posts.length < response.headers.get('total_count');
          this.page += 1;
        }
      }, error => {
        this.error = error;
      });
    }
  }
  loadMoreComments() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if(windowBottom >= docHeight) {
      this.fetchPosts();
    }
  }
}
