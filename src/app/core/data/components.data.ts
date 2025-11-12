import { CatalogItem, DocSectionItem } from "./data.types";

export const componentList : CatalogItem[] = [
  {
    name: "Simple button",
    url: "/components/simple-button",
    description: "Customizable and easy-to-use simple button",
    image: "images/components/ng-buttons-static-cover.png",
    featured: false
  },
  {
    name: "Link button",
    url: "/components/link-button",
    description: "Customizable and easy-to-use link button",
    image: "images/components/ng-buttons-static-cover.png",
    featured: true
  },
  {
    name: "Menu toggle",
    url: "/components/menu-toggle",
    description: "Customizable and easy-to-use menu toggle",
    image: "images/components/ng-menu-toggle-static-cover.png",
    featured: true
  },
  {
    name: "Theme toggle",
    url: "/components/theme-toggle",
    description: "Toggle button to handle dark/light theme",
    image: "images/components/ng-theme-toggle-static-cover.png",
    featured: true
  },
  {
    name: "Content Card",
    url: "/components/content-card",
    description: "Easy-to-use customizable card",
    image: "images/components/ng-content-card-static-cover.png",
    featured: true
  },
  {
    name: "Hero Carousel",
    url: "/components/hero-carousel",
    description: "Anuglar hero carousel",
    image: "images/components/ng-hero-carousel-static-cover.png",
    featured: true
  },
  {
    name: "Content Carousel",
    url: "/components/content-carousel",
    description: "Anuglar content carousel",
    image: "images/components/ng-content-carousel-static-cover.png",
    featured: true
  },
  {
    name: "Scroll Nav",
    url: "/components/scroll-nav",
    description: "Anuglar scrollabe nav",
    image: "images/components/ng-scroll-nav-static-cover.png",
    featured: true
  },
];



export const docSectionList : DocSectionItem[] = [
  {
    name: "Introduction",
    code: "intro"
  },
  {
    name: "Installation",
    code: "inst"
  },
  {
    name: "Overview",
    code: "ovw"
  },
  {
    name: "Functionality",
    code: "func"
  },
  {
    name: "Inputs and Outputs",
    code: "io"
  },
  {
    name: "Styling",
    code: "sty"
  },
  {
    name: "Accessibility",
    code: "acc"
  },
  {
    name: "Contribute or report",
    code: "rep"
  }
];
