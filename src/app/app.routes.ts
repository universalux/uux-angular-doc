import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { ComponentsLayout } from './layouts/components-layout/components-layout';
import { ComponentsPage } from './features/components/components-page/components-page';
import { HomePage } from './features/home-page/home-page';
import { KitsLayout } from './layouts/kits-layout/kits-layout';
import { KitsPage } from './features/kits/kits-page/kits-page';
import { ComponentLayout } from './layouts/component-layout/component-layout';
import { SimpleButtonPlayground } from './features/components/simple-button/simple-button-playground/simple-button-playground';
import { SimpleButtonDoc } from './features/components/simple-button/simple-button-doc/simple-button-doc';
import { LinkButtonPlayground } from './features/components/link-button/link-button-playground/link-button-playground';
import { LinkButtonDoc } from './features/components/link-button/link-button-doc/link-button-doc';
import { MenuTogglePlayground } from './features/components/menu-toggle/menu-toggle-playground/menu-toggle-playground';
import { MenuToggleDoc } from './features/components/menu-toggle/menu-toggle-doc/menu-toggle-doc';

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
      { path: "simple-button",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: SimpleButtonPlayground
          },
          {
            path: 'documentation',
            component: SimpleButtonDoc
          }
        ]
      },
      { path: "link-button",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: LinkButtonPlayground
          },
          {
            path: 'documentation',
            component: LinkButtonDoc
          }
        ]
      },
      { path: "menu-toggle",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: MenuTogglePlayground
          },
          {
            path: 'documentation',
            component: MenuToggleDoc
          }
        ]
      },
      {path: "theme-toggle", component: ComponentsPage},
      {path: "content-card", component: ComponentsPage},
      {path: "hero-carousel", component: ComponentsPage},
      {path: "content-carousel", component: ComponentsPage},
      {path: "scroll-nav", component: ComponentsPage},
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
