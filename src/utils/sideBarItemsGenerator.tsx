import { NavLink } from "react-router-dom";
import { TAdminSideBar, TItems } from "../types/siteBarItems.type";

export const sideBarItemsGenerator = (items: TItems[], path: string) => {
  const adminSidebarItems = items.reduce((acc: TAdminSideBar[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${path}/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${path}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminSidebarItems;
};
