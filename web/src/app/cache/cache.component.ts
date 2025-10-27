import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from 'src/lib/base-component';
import { CacheInfo } from 'src/app/cache/models/cache-info';
import { CacheService } from 'src/app/cache/services/cache.service';
import { CacheViewModalComponent } from './cache-view-modal/cache-view-modal.component';
import { CacheCreateModalComponent } from './cache-create-modal/cache-create-modal.component';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-cache',
    templateUrl: './cache.component.html',
    styleUrls: ['./cache.component.css'],
    standalone: false
})
export class CacheComponent extends BaseComponent implements OnInit {

  caches: CacheInfo[]

  constructor(private cacheService: CacheService, private dialog: MatDialog) {
    super();
  }

  async ngOnInit() {
    this.caches = await this.cacheService.list();
    this.subscribeToListRefresh().subscribe(() => this.cacheService.list().then(caches => this.caches = caches));
  }

  remove(key: string) {
    this.cacheService.remove(key).then(async () => {
      this.caches = await this.cacheService.list();
    })
  }

  async view(key: string) {
    var value = await this.cacheService.get(key);
    if (value) {
      let dialogRef = this.dialog.open(CacheViewModalComponent, { width: '600px' });
      let component = <CacheViewModalComponent>dialogRef.componentInstance;
      component.model = value;
    }
  }

  create(): void {

    let dialogRef = this.dialog.open(CacheCreateModalComponent, { width: '600px' });
    let component = <CacheCreateModalComponent>dialogRef.componentInstance;

    component.onconfirmed
      .pipe(take(1))
      .subscribe(value => {
        if (value) {
          this.cacheService.create(value.key, value.content, value.duration, value.expirationWarning, value.tags).then(success => {
            if (success) {
              this.ngOnInit();
            }
          })
        }
      });
  }
}
