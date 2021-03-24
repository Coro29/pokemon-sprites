import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.scss']
})
export class ListControlComponent implements OnInit {
  generations: Number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  hidden: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilter(): void {
    this.hidden = !this.hidden;
  }

}
