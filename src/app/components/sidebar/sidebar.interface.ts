export interface SidebarItem {
  iconUrl: string;
  name: string;
  url: string;
  childrens?: SidebarItem[];
  opened?: boolean;
}
