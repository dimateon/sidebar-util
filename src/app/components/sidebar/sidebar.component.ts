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

  @ViewChild('contentRef', { static: true })
  public contentRef!: ElementRef;

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

    this.contentRef.nativeElement.style.width = (window.innerWidth - newWidth) + 'px';
    
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
    // if (!this.searchInput) {
    //   this.localItems = this.navItems;
    //   return;
    // }

    this._filter(this.searchInput);
    // this.localItems = this.navItems.filter((item) =>
    //   item.name.includes(this.searchInput)
    // );
  }

    public _filter(value: string) {
      let filterValue = value;
      if (filterValue === '') {
          this.localItems = this.navItems;
      } else {
          this.localItems = [];
          const searchFields: string[] = ['name'];
          const filterText = filterValue.toLowerCase();
          const isStrictMode = true;
          for (let node of this.navItems) {
              let copyNode = { ...node };
              let paramsWithoutNode = { searchFields, filterText, isStrictMode };
              if (
                  
                  this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode)
              ) {
                  this.localItems.push(copyNode);
              }
          }
      }
    }

    private isFilterMatched(node: SidebarItem, params: any) {
      let { searchFields, filterText, isStrictMode } = params;
      let matched = false;
      let fieldValue = node.name.toLowerCase();
          if (fieldValue.indexOf(filterText) > -1) {
              matched = true;
          }

      if (!matched || (isStrictMode && !this.isNodeLeaf(node))) {
          matched = this.findFilteredNodes(node, { searchFields, filterText, isStrictMode }) || matched;
      }

      return matched;
    }

    private isNodeLeaf(node: SidebarItem): boolean {
        return !(node.childrens && node.childrens.length);
    }

    private findFilteredNodes(node: SidebarItem, paramsWithoutNode: any) {
      if (node) {
          let matched = false;
          if (node.childrens) {
              let childNodes = [...node.childrens];
              node.childrens = [];
              for (let childNode of childNodes) {
                  let copyChildNode = { ...childNode };
                  if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                      matched = true;
                      node.childrens.push(copyChildNode);
                  }
              }
          }

          if (matched) {
              node.opened = true;
              return true;
          } else {
            return false;
          }
      } else {
        return false;
      }
    }
}
