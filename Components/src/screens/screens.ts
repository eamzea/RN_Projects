import { MenuItem } from 'interfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 1',
    icon: 'cube-outline',
    component: 'Animation1Screen',
  },
  {
    name: 'Animation 2',
    icon: 'cube-outline',
    component: 'Animation2Screen',
  },
  {
    name: 'Switch',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alert',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Input',
    icon: 'text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullScreen',
  },
  {
    name: 'Section List',
    icon: 'albums-outline',
    component: 'SectionScreen',
  },
  {
    name: 'Modal',
    icon: 'albums-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite',
    icon: 'infinite-outline',
    component: 'InfiniteScreen',
  },
  {
    name: 'Slides',
    icon: 'film-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Theme',
    icon: 'color-palette-outline',
    component: 'ThemeScreen',
  },
];
