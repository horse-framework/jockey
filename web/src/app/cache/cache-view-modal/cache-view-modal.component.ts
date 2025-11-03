import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CacheService } from '../services/cache.service';
import { CacheInfo } from '../models/cache-info';

@Component({
    selector: 'app-cache-view-modal',
    templateUrl: './cache-view-modal.component.html',
    styleUrls: ['./cache-view-modal.component.css'],
    standalone: false
})
export class CacheViewModalComponent implements OnInit {

  model: CacheInfo | null = null;

  constructor(private cacheService: CacheService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  remove() {
    this.cacheService
      .remove(this.model!.key)
      .subscribe(() => {
        this.dialog.closeAll(); //todo: state mgmt required for list
      });
  }
}
