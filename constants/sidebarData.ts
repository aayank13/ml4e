import { NavItem } from "@/types";

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: 'home',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Community',
    url: '/dashboard/community',
    icon: 'community',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Datasets',
    url: '/dashboard/datasets',
    icon: 'datasets',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Learn',
    url: '/dashboard/learn',
    icon: 'learn',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Models',
    url: '/dashboard/models',
    icon: 'models',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
    ]
  },

];