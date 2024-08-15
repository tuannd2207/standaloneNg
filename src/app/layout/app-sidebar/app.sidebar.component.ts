import {Component, ElementRef} from '@angular/core';
import {LayoutService} from "../service/app.layout.service";
import {AppMenuComponent} from "../app-menu/app.menu.component";

@Component({
  standalone: true,
  imports: [
    AppMenuComponent
  ],
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {
  }
}

