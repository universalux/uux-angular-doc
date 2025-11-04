import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { ComponentsLayout } from './layouts/components-layout/components-layout';
import { ComponentsPage } from './features/components/components-page/components-page';
import { HomePage } from './features/home-page/home-page';
import { KitsLayout } from './layouts/kits-layout/kits-layout';
import { KitsPage } from './features/kits/kits-page/kits-page';

export const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", component: HomePage },
      { path: "contribute", component: HomePage },
    ],
  },

  {
    path: "components",
    component: ComponentsLayout,
    children: [
      {path: "", component: ComponentsPage},
      {path: "link-button", component: ComponentsPage},
      {path: "menu-toggle", component: ComponentsPage},
      {path: "theme-toggle", component: ComponentsPage},
      {path: "image-card", component: ComponentsPage},
      {path: "hero-carousel", component: ComponentsPage},
      {path: "content-carousel", component: ComponentsPage},
    ]
  },

  {
    path: "kits",
    component: KitsLayout,
    children: [
      {path: "", component: KitsPage},
    ]
  },
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
