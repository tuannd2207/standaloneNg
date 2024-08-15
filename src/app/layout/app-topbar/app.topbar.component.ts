import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "../service/app.layout.service";
// import {LocalStorageJwtService} from "../../../helper/services/local-storage-jwt.service";
import {Lang, ThemeType} from "../../enums/app.enum";
import {I18nService} from "../../services/i18n.service";
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MenuModule} from "primeng/menu";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    MenuModule,
    ToggleButtonModule,
    FormsModule,
    NgIf
  ],
})
export class AppTopBarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;
  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
  @ViewChild('topbarmenu') menu!: ElementRef;
  layoutService = inject(LayoutService);
  items: MenuItem[] =
    [
      {
        label: 'Options',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            routerLink: '/auth/login',
          },
        ]
      }
    ];
  toggleLang = true;
  valSwitch = false;
  // private localStorageService = inject(LocalStorageJwtService);
  private i18nService = inject(I18nService);

  toggleTheme(): void {
    this.valSwitch = !this.valSwitch;
    this.layoutService.setTheme(this.valSwitch ? ThemeType.dark : ThemeType.light);

  }

  logOut(): void {
    // this.localStorageService.removeItem();
  }

  switchLanguage(language: boolean): void {
    this.toggleLang = language;
    this.i18nService.setLanguage(this.toggleLang ? Lang.vi : Lang.en);
  }
}

