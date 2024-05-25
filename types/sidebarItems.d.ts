export interface SidebarItems {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  children?: SidebarItems[];
}
export type SidebarItemsArray = SidebarItems[];
