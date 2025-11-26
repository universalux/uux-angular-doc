import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { ComponentsLayout } from './layouts/components-layout/components-layout';
import { ComponentsPage } from './features/components/components-page/components-page';
import { HomePage } from './features/home-page/home-page';
import { KitsLayout } from './layouts/kits-layout/kits-layout';
import { KitsPage } from './features/kits/kits-page/kits-page';
import { ComponentLayout } from './layouts/component-layout/component-layout';
import { ContributePage } from './features/contribute-page/contribute-page';
import { ToggleKit } from './features/kits/toggle-kit/toggle-kit';
import { KitLayout } from './layouts/kit-layout/kit-layout';
import { ButtonKit } from './features/kits/button-kit/button-kit';
import { UuxKit } from './features/kits/uux-kit/uux-kit';

export const routes: Routes = [

  { path: "",
    component: MainLayout,
    children: [
      { path: "", component: HomePage },
      { path: "contribute", component: ContributePage },
    ],
  },

  { path: "components",
    component: ComponentsLayout,
    children: [
      {path: "", component: ComponentsPage},
      { path: "simple-button",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@simple-button/simple-button-playground/simple-button-playground')
              .then(m => m.SimpleButtonPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@simple-button/simple-button-doc/simple-button-doc')
              .then(m => m.SimpleButtonDoc)
          }
        ]
      },
      { path: "link-button",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@link-button/link-button-playground/link-button-playground')
              .then(m => m.LinkButtonPlayground),
            children: [
              {
                path: 'playground-test-link',
                loadComponent: () => import('@link-button/link-button-playground/link-button-playground')
                  .then(m => m.LinkButtonPlayground),
              },
            ]
          },
          {
            path: 'documentation',
            loadComponent: () => import('@link-button/link-button-doc/link-button-doc')
              .then(m => m.LinkButtonDoc)
          }
        ]
      },
      { path: "menu-toggle",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@menu-toggle/menu-toggle-playground/menu-toggle-playground')
              .then(m => m.MenuTogglePlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@menu-toggle/menu-toggle-doc/menu-toggle-doc')
              .then(m => m.MenuToggleDoc)
          }
        ]
      },
      { path: "theme-toggle",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@theme-toggle/theme-toggle-playground/theme-toggle-playground')
              .then(m => m.ThemeTogglePlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@theme-toggle/theme-toggle-doc/theme-toggle-doc')
              .then(m => m.ThemeToggleDoc)
          }
        ]
      },
      { path: "content-card",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@content-card/content-card-playground/content-card-playground')
              .then(m => m.ContentCardPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@content-card/content-card-doc/content-card-doc')
              .then(m => m.ContentCardDoc)
          }
        ]
      },
      { path: "hero-carousel",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@hero-carousel/hero-carousel-playground/hero-carousel-playground')
              .then(m => m.HeroCarouselPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@hero-carousel/hero-carousel-doc/hero-carousel-doc')
              .then(m => m.HeroCarouselDoc)
          }
        ]
      },
      { path: "content-carousel",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@content-carousel/content-carousel-playground/content-carousel-playground')
              .then(m => m.ContentCarouselPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@content-carousel/content-carousel-doc/content-carousel-doc')
              .then(m => m.ContentCarouselDoc)
          }
        ]
      },
      { path: "scroll-nav",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@scroll-nav/scroll-nav-playground/scroll-nav-playground')
              .then(m => m.ScrollNavPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@scroll-nav/scroll-nav-doc/scroll-nav-doc')
              .then(m => m.ScrollNavDoc)
          }
        ]
      },
      { path: "expand",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@expand/expand-playground/expand-playground')
              .then(m => m.ExpandPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@expand/expand-doc/expand-doc')
              .then(m => m.ExpandDoc)
          }
        ]
      },
      { path: "expand-group",
        component: ComponentLayout,
        children: [
          { path: '', redirectTo: 'playground', pathMatch: 'full' },
          {
            path: 'playground',
            loadComponent: () => import('@expand-group/expand-group-playground/expand-group-playground')
              .then(m => m.ExpandGroupPlayground)
          },
          {
            path: 'documentation',
            loadComponent: () => import('@expand-group/expand-group-doc/expand-group-doc')
              .then(m => m.ExpandGroupDoc)
          }
        ]
      },
    ]
  },

  { path: "kits",
    component: KitsLayout,
    children: [
      {path: "", component: KitsPage},
      {
        path: "",
        component: KitLayout,
        children: [
          {path: "toggle-kit", component: ToggleKit},
          {path: "button-kit", component: ButtonKit},
          {path: "uux-kit", component: UuxKit},
        ]
      },
    ]
  },
];

