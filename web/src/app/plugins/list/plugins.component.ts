import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PluginAssembly } from '../models/plugin-assembly';
import { PluginsService } from '../services/plugins.service';
import { PluginInfo } from '../models/plugin-info';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrl: './plugins.component.css',
  standalone: false
})
export class PluginsComponent implements OnInit {

  model: PluginAssembly[] = [];
  processing: boolean = false;

  @ViewChild('fileUpload')
  fileUpload: ElementRef<HTMLInputElement> | undefined;

  constructor(private service: PluginsService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.processing = true;
    this.service.list().subscribe(r => {
      this.model = r.body!;
      this.processing = false;
    });
  }

  load() {
    this.fileUpload!.nativeElement.click();
  }

  onFileChanged(event: any) {

    if (event.target == null || event.target.files == null || event.target.files.length == 0) {
      return;
    }

    let file: File = event.target.files[0];
    this.processing = true;
    this.service.load(file).subscribe(r => {
      this.processing = false;
      this.list();
    });
  }

  enable(plugin: PluginInfo) {
    this.processing = true;
    this.service.enable(plugin.name).subscribe(r => {
      this.processing = false;
      this.list();
    });
  }

  disable(plugin: PluginInfo) {
    this.processing = true;
    this.service.disable(plugin.name).subscribe(r => {
      this.processing = false;
      this.list();
    });
  }

  remove(plugin: PluginInfo) {
    this.processing = true;
    this.service.remove(plugin.name).subscribe(r => {
      this.processing = false;
      this.list();
    });
  }
}
