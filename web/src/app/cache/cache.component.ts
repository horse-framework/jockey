import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from 'src/lib/base-component';
import { CacheInfo } from 'src/models/cache-info';
import { CacheService } from 'src/services/cache.service';
import { CacheViewModalComponent } from './cache-view-modal/cache-view-modal.component';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent extends BaseComponent implements OnInit {

  caches: CacheInfo[]

  constructor(private cacheService: CacheService, private dialog: MatDialog) {
    super();
  }

  async ngOnInit() {
    this.caches = await this.cacheService.list();
  }

  remove(key: string) {
    this.cacheService.remove(key).then(async () => {
      this.caches = await this.cacheService.list();
    })
  }

  async view(key: string) {
    var value = await this.cacheService.get(key);
    if (value.ok) {
      let dialogRef = this.dialog.open(CacheViewModalComponent, { width: '500px' });
      let component = <CacheViewModalComponent>dialogRef.componentInstance;
      component.model = value;
    }
  }
}
