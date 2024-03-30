import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PluginAssembly } from '../models/plugin-assembly';
import { PluginsService } from '../services/plugins.service';
import { PluginInfo } from '../models/plugin-info';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrl: './plugins.component.css'
})
export class PluginsComponent implements OnInit {

  model: PluginAssembly[];
  processing: boolean = false;

  @ViewChild('fileUpload')
  fileUpload: ElementRef<HTMLInputElement>;

  constructor(private service: PluginsService) { }

  ngOnInit(): void {
    this.list();
  }

  async list() {
    this.processing = true;
    this.model = await this.service.list();
    this.processing = false;
  }

  async load() {
    console.log(this.fileUpload.nativeElement);
    this.fileUpload.nativeElement.click();
  }

  async onFileChanged(event: any) {

    if (event.target == null || event.target.files == null || event.target.files.length == 0) {
      return;
    }

    let file: File = event.target.files[0];
    this.processing = true;
    try {
      await this.service.load(file);
    }
    finally {
      this.processing = false;
      this.list();
    }
  }

  async enable(plugin: PluginInfo) {
    this.processing = true;
    try {
      await this.service.enable(plugin.name);
      this.list();
    }
    finally {
      this.processing = false;
    }
  }

  async disable(plugin: PluginInfo) {
    this.processing = true;
    try {
      await this.service.disable(plugin.name);
      this.list();
    }
    finally {
      this.processing = false;
    }
  }

  async remove(plugin: PluginInfo) {
    this.processing = true;
    try {
      await this.service.remove(plugin.name);
    }
    finally {
      this.processing = false;
      this.list();
    }
  }

}
