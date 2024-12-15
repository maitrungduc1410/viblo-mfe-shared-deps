import { Component } from '@angular/core';
import { loadRemoteModule } from '../utils/federation-utils';
import { AppService } from '../app.service';
import { ktdTrackById, KtdGridLayout } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  loaders: any = [];

  cols: number = 6;
  rowHeight: number = 100;
  layout: KtdGridLayout = [];
  trackById = ktdTrackById;

  constructor(readonly appService: AppService) {}

  ngOnInit() {
    this.loadModules();
  }

  logout() {
    window.location.reload();
  }

  async loadModules() {
    for (const m of this.appService.authorized_modules) {
      try {
        const module = await loadRemoteModule(m);

        let loader;
        if (module.default) {
          loader = module.default;
        } else {
          loader = module;
        }
        this.loaders.push(loader);
        console.log(loader)

        const newLayout = [];
        for (let i = 0; i < this.loaders.length; i++) {
          newLayout.push({
            id: `${i}-${Date.now()}`,
            x: 0,
            y: 0,
            w: 3,
            h: 3,
          });
        }

        this.layout = newLayout;
      } catch (e) {
        console.error(e);
      }
    }
  }

  getLoader(id: string): any {
    // get index from id, then return loader
    return this.loaders[parseInt(id.split('-')[0])];
  }
}
