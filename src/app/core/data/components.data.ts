import { CatalogItem } from "./data.types";

export const componentList : CatalogItem[] = [
  {
    id: "simple-button",
    name: "Simple button",
    url: "/components/simple-button",
    description: "Customizable and easy-to-use simple button",
    image: "assets/images/components/ng-buttons-static-cover.png",
    featured: false,
    kitId: 'button-kit'
  },
  {
    id: "link-button",
    name: "Link button",
    url: "/components/link-button",
    description: "Customizable and easy-to-use link button",
    image: "assets/images/components/ng-buttons-static-cover.png",
    featured: true,
    kitId: 'button-kit'
  },
  {
    id: "menu-toggle",
    name: "Menu toggle",
    url: "/components/menu-toggle",
    description: "Customizable and easy-to-use menu toggle",
    image: "assets/images/components/ng-menu-toggle-static-cover.png",
    featured: true,
    kitId: 'toggle-kit'
  },
  {
    id: "theme-toggle",
    name: "Theme toggle",
    url: "/components/theme-toggle",
    description: "Toggle button to handle dark/light theme",
    image: "assets/images/components/ng-theme-toggle-static-cover.png",
    featured: true,
    kitId: 'toggle-kit'
  },
  {
    id: "content-card",
    name: "Content Card",
    url: "/components/content-card",
    description: "Easy-to-use customizable card",
    image: "assets/images/components/ng-content-card-static-cover.png",
    featured: true
  },
  {
    id: "hero-carousel",
    name: "Hero Carousel",
    url: "/components/hero-carousel",
    description: "Anuglar hero carousel",
    image: "assets/images/components/ng-hero-carousel-static-cover.png",
    featured: true
  },
  {
    id: "content-carousel",
    name: "Content Carousel",
    url: "/components/content-carousel",
    description: "Anuglar content carousel",
    image: "assets/images/components/ng-content-carousel-static-cover.png",
    featured: true
  },
  {
    id: "scroll-nav",
    name: "Scroll Nav",
    url: "/components/scroll-nav",
    description: "Anuglar scrollabe nav",
    image: "assets/images/components/ng-scroll-nav-static-cover.png",
    featured: true
  },
  {
    id: "expand",
    name: "Expand",
    url: "/components/expand",
    description: "Anuglar expandable item",
    image: "assets/images/components/ng-expand-static-cover.png",
    featured: true
  },
];

