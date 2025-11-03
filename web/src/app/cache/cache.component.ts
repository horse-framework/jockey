import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CacheInfo } from '../../../src/app/cache/models/cache-info';
import { CacheService } from '../../../src/app/cache/services/cache.service';
import { CacheViewModalComponent } from './cache-view-modal/cache-view-modal.component';
import { CacheCreateModalComponent } from './cache-create-modal/cache-create-modal.component';
import { take } from 'rxjs/operators';
import { BaseFormComponent } from '../../lib/base-form.component';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css'],
  standalone: false
})
export class CacheComponent extends BaseFormComponent implements OnInit {

  caches: CacheInfo[] = [];

  constructor(private cacheService: CacheService, private dialog: MatDialog) {
    super();
  }

  async ngOnInit() {
    this.cacheService.list()
      .subscribe(response => {
        this.caches = response.body!;
        this.subscribeToListRefresh().subscribe(() => this.cacheService.list().subscribe(r => this.caches = r.body!));
      })
  }

  remove(key: string) {
    this.cacheService.remove(key).subscribe(response => {
      this.cacheService.list().subscribe(r => this.caches = r.body!);
    });
  }

  async view(key: string) {
    this.cacheService.get(key).subscribe(response => {
      if (response.ok) {
        let dialogRef = this.dialog.open(CacheViewModalComponent, { width: '700px' });
        let component = <CacheViewModalComponent>dialogRef.componentInstance;
        component.model = response.body!;
      }
    });
  }

  create(): void {

    let dialogRef = this.dialog.open(CacheCreateModalComponent, { width: '600px' });
    let component = <CacheCreateModalComponent>dialogRef.componentInstance;

    component.onconfirmed
      .pipe(take(1))
      .subscribe(value => {
        if (value) {
          this.cacheService.create(value.key, value.content, value.duration, value.expirationWarning, value.tags).subscribe(response => {
            if (response.ok) {
              this.ngOnInit();
            }
          })
        }
      });
  }
}
