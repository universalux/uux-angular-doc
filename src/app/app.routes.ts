import { Routes } from '@angular/router';
import { MainLayout } from './core/layouts/main-layout/main-layout';
import { ComponentsLayout } from './core/layouts/components-layout/components-layout';

export const routes: Routes = [
  {path: "", component: MainLayout},

  {
    path: "components",
    component: ComponentsLayout,
    children: [
      {path: "menu-button", component: MainLayout},
      {path: "theme-toggle", component: MainLayout},
    ]
  },

  {path: "kits", component: ComponentsLayout},
];

// export const routes: Routes = [
//   {path: "", component: MainLayout},

//   {
//     path: "components",
//     component: ComponentsLayout,
//     children: [
//       {path: "menu-button", component: MainLayout},
//       {path: "theme-toggle", component: MainLayout},
//     ]
//   },

//   {path: "kits", component: ComponentsLayout},
// ];
