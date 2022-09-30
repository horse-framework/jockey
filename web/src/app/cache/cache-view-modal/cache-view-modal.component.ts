import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cache-view-modal',
  templateUrl: './cache-view-modal.component.html',
  styleUrls: ['./cache-view-modal.component.css']
})
export class CacheViewModalComponent implements OnInit {

  model: { key: string, value: string } = null;

  constructor() { }

  ngOnInit(): void {
  }

}
