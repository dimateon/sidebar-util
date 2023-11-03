import { Component } from '@angular/core';
import { SidebarNavItem } from './interfaces/sidebar';
import { SidebarItem } from './components/sidebar/sidebar.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sidebar-util';

  public navItems: SidebarItem[] = [
    {
      iconUrl: 'assets/heart.svg',
      name: 'Page 1',
      url: '1',
      childrens: [
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Page 2',
          url: '2',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Page 2',
          url: '2',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Page 2',
          url: '2',
          childrens: [
            {
              iconUrl: 'assets/add-cart.svg',
              name: 'Page 2',
              url: '2',
            },
            {
              iconUrl: 'assets/add-cart.svg',
              name: 'Page 2',
              url: '2',
            },
            {
              iconUrl: 'assets/add-cart.svg',
              name: 'Page 2',
              url: '2',
            },
          ],
        },
      ],
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },

    {
      iconUrl: 'assets/mail.svg',
      name: 'Page 3',
      url: '3',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Page 2',
      url: '2',
    },
  ];
}
