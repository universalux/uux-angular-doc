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
import { ThemeTogglePlayground } from './features/components/theme-toggle/theme-toggle-playground/theme-toggle-playground';
import { ThemeToggleDoc } from './features/components/theme-toggle/theme-toggle-doc/theme-toggle-doc';
import { ContentCardPlayground } from './features/components/content-card/content-card-playground/content-card-playground';
import { ContentCardDoc } from './features/components/content-card/content-card-doc/content-card-doc';
import { HeroCarouselPlayground } from './features/components/hero-carousel/hero-carousel-playground/hero-carousel-playground';
import { HeroCarouselDoc } from './features/components/hero-carousel/hero-carousel-doc/hero-carousel-doc';
import { ContentCarouselPlayground } from './features/components/content-carousel/content-carousel-playground/content-carousel-playground';
import { ContentCarouselDoc } from './features/components/content-carousel/content-carousel-doc/content-carousel-doc';

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
      { path: "theme-toggle",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: ThemeTogglePlayground
          },
          {
            path: 'documentation',
            component: ThemeToggleDoc
          }
        ]
      },
      { path: "content-card",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: ContentCardPlayground
          },
          {
            path: 'documentation',
            component: ContentCardDoc
          }
        ]
      },
      { path: "hero-carousel",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: HeroCarouselPlayground
          },
          {
            path: 'documentation',
            component: HeroCarouselDoc
          }
        ]
      },
      { path: "content-carousel",
        component: ComponentLayout,
        children: [
          {
            path: '',
            redirectTo: 'playground',
            pathMatch: 'full'
          },
          {
            path: 'playground',
            component: ContentCarouselPlayground
          },
          {
            path: 'documentation',
            component: ContentCarouselDoc
          }
        ]
      },
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
