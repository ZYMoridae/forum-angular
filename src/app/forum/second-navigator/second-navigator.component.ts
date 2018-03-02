import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InfoService } from '../../info.service';

@Component({
  selector: 'app-second-navigator',
  templateUrl: './second-navigator.component.html',
  styleUrls: ['./second-navigator.component.css']
})
export class SecondNavigatorComponent implements OnInit {
  tags = []
  @Input() selectedTag
  @Input() sortItem
  @Output() onTagSelected = new EventEmitter<any>();
  @Output() onSortItemSelected = new EventEmitter<any>();
  sortItems = [{
    name: 'Last Time',
    codeName: 'last_time'
  },{
    name: 'Top',
    codeName: 'top'
  }, {
    name: 'Newest',
    codeName: 'newest'
  }, {
    name: 'Oldest',
    codeName: 'oldest'
  }]
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.fetchTags();
    this.sortItem = this.sortItems[0];
  }

  fetchTags() {
    this.infoService.getInfo('/api/v1/forum/tags', {}, 'GET').subscribe(response => {
      if(response.body) {
        this.tags = response.body;
        this.selectedTag = response.body[0];
      }
    });
  }

  tagSelected(tag) {
    this.onTagSelected.emit(tag);
  }

  sortItemSelected(sortItem) {
    this.onSortItemSelected.emit(sortItem);
  }
}
