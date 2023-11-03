import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from './sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  @Input() navItems: SidebarItem[] = [];
  constructor(private router: Router) {}

  @ViewChild('resizer', { static: true })
  public resizer!: ElementRef;

  @ViewChild('navRef', { static: true })
  public navRef!: ElementRef;

  private resizingEvent = {
    isResizing: false,
    startingCursorX: 0,
    startingWidth: 0,
  };

  public localItems: SidebarItem[] = [];
  public searchInput: string = '';

  ngOnInit(): void {
    this.localItems = this.navItems;
  }

  startResizing(event: MouseEvent): void {
    this.resizingEvent = {
      isResizing: true,
      startingCursorX: event.clientX,
      startingWidth: this.navRef.nativeElement.getBoundingClientRect().width,
    };
  }

  @HostListener('window:mousemove', ['$event'])
  updateSidenavWidth(event: MouseEvent) {
    if (!this.resizingEvent.isResizing) {
      return;
    }

    const cursorDeltaX = event.clientX - this.resizingEvent.startingCursorX;

    const newWidth = this.resizingEvent.startingWidth + cursorDeltaX;

    this.navRef.nativeElement.style.width = newWidth + 'px';
  }

  @HostListener('window:mouseup')
  stopResizing() {
    this.resizingEvent.isResizing = false;
  }

  public goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  public handleSearch(): void {
    console.log(this.searchInput);
    if (!this.searchInput) {
      this.localItems = this.navItems;
      return;
    }
    this.localItems = this.navItems.filter((item) =>
      item.name.includes(this.searchInput)
    );
  }
}
