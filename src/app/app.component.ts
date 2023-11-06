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
      name: 'Documents',
      url: '1',
      childrens: [
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Work',
          url: '4',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Home',
          url: '4',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Events',
          url: '3',
          childrens: [
            {
              iconUrl: 'assets/add-cart.svg',
              name: 'Event 1',
              url: '3',
            },
            {
              iconUrl: 'assets/add-cart.svg',
              name: 'Event 2',
              url: '3',
            },
            {
              iconUrl: 'assets/add-cart.svg',
              name: 'MEvent 3',
              url: '4',
            },
          ],
        },
      ],
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'Movies',
      url: '2',
      childrens: [
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Event 1',
          url: '4',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Event 2',
          url: '4',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'MEvent 3',
          url: '4',
        },
      ],
    },

    {
      iconUrl: 'assets/mail.svg',
      name: 'Coffes',
      url: '3',
      childrens: [
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Event 1',
          url: '4',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'Event 2',
          url: '5',
        },
        {
          iconUrl: 'assets/add-cart.svg',
          name: 'MEvent 3',
          url: '6',
        },
      ],
    },
    {
      iconUrl: 'assets/add-cart.svg',
      name: 'MEvent 3',
      url: '11',
    },
  ];
}
