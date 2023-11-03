import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SidebarItem } from '../sidebar.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarItemComponent {
  @Input() item!: SidebarItem;
  @Input() level!: number;

  constructor(private router: Router) {}

  public goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  public toggle(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.item.opened = !this.item.opened;
  }

  get levelPadding(): string {
    if (this.level && this.level > 0) {
      return 24 * this.level + 'px';
    }
    return '12px';
  }
}
