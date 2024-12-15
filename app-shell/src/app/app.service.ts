import { Injectable } from '@angular/core';

const users = [
  {
    username: 'user',
    password: 'user',
  },
];

const remoteModules = [
  {
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    remoteName: 'angular_mfe_app',
    exposedModule: 'AngularAppLoader',
  },
  {
    remoteEntry: 'http://localhost:3002/remoteEntry.js',
    remoteName: 'react_mfe_app',
    exposedModule: 'ReactAppLoader',
  },
  {
    remoteEntry: 'vite:http://localhost:3003/remoteEntry.js',
    remoteName: 'vue_mfe_app',
    exposedModule: 'VueAppLoader',
  },
  // {
  //   remoteEntry: 'http://localhost:3004/remoteEntry.js',
  //   remoteName: 'angular_13_mfe_app',
  //   exposedModule: 'Angular13AppLoader',
  // },
  // {
  //   remoteEntry: 'http://localhost:3005/remoteEntry.js',
  //   remoteName: 'angular_18_mfe_app',
  //   exposedModule: 'Angular18AppLoader',
  // },
];

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loggedUser: { username: string; password: string } | null = null;
  authorized_modules: typeof remoteModules = [];

  login(username: string, password: string) {
    const user = users.find(
      (item) => item.username === username && item.password === password
    );

    if (!user) return false;

    this.loggedUser = user;

    this.authorized_modules = remoteModules; // all modules

    return true;
  }
}
