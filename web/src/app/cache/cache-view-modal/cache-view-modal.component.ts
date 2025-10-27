import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CacheInfo } from 'src/app/cache/models/cache-info';
import { CacheService } from 'src/app/cache/services/cache.service';

@Component({
    selector: 'app-cache-view-modal',
    templateUrl: './cache-view-modal.component.html',
    styleUrls: ['./cache-view-modal.component.css'],
    standalone: false
})
export class CacheViewModalComponent implements OnInit {

  model: CacheInfo = null;

  constructor(private cacheService: CacheService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  remove() {
    this.cacheService
      .remove(this.model.key)
      .then(() => {
        this.dialog.closeAll(); //todo: state mgmt required for list
      });
  }
}
