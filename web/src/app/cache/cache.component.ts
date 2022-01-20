import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { CacheInfo } from 'src/models/cache-info';
import { CacheService } from 'src/services/cache.service';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent extends BaseComponent implements OnInit {

  caches: CacheInfo[]

  constructor(private cacheService: CacheService) {
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
}
