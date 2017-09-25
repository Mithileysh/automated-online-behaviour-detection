import { Component } from '@angular/core';
import { Router }    from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent { }
