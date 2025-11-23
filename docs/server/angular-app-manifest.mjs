
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/uux-angular-doc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/uux-angular-doc"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/contribute"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/simple-button/playground",
    "route": "/uux-angular-doc/components/simple-button"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/simple-button/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/simple-button/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/link-button/playground",
    "route": "/uux-angular-doc/components/link-button"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/link-button/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/link-button/playground/playground-test-link"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/link-button/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/menu-toggle/playground",
    "route": "/uux-angular-doc/components/menu-toggle"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/menu-toggle/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/menu-toggle/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/theme-toggle/playground",
    "route": "/uux-angular-doc/components/theme-toggle"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/theme-toggle/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/theme-toggle/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/content-card/playground",
    "route": "/uux-angular-doc/components/content-card"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/content-card/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/content-card/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/hero-carousel/playground",
    "route": "/uux-angular-doc/components/hero-carousel"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/hero-carousel/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/hero-carousel/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/content-carousel/playground",
    "route": "/uux-angular-doc/components/content-carousel"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/content-carousel/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/content-carousel/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/scroll-nav/playground",
    "route": "/uux-angular-doc/components/scroll-nav"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/scroll-nav/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/scroll-nav/documentation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/uux-angular-doc/components/expand/playground",
    "route": "/uux-angular-doc/components/expand"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/expand/playground"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/components/expand/documentation"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/kits"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/kits/toggle-kit"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/kits/button-kit"
  },
  {
    "renderMode": 2,
    "route": "/uux-angular-doc/kits/uux-kit"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1670, hash: '0e051beec130a1afa39022e7a4fe6802e1ecc1dda7d2a63736accef1057e6d28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '5b53927d768f7d8ac4c4bea80a5d1b1e8a74ef92fa05348b492fa7d72ba89d6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contribute/index.html': {size: 54992, hash: '1b04a89715a90bab657704da4007a9437a303e29867e3e04c6a17642846edfb0', text: () => import('./assets-chunks/contribute_index_html.mjs').then(m => m.default)},
    'index.html': {size: 89597, hash: 'e2197d2088696fa523eaf7be29a6c93b7fbb839ed0e38ceb84e138024802a8e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'components/link-button/playground/index.html': {size: 101872, hash: 'fb983e8547c569b9506879215f951171d9382958898474d968ef508128fecebe', text: () => import('./assets-chunks/components_link-button_playground_index_html.mjs').then(m => m.default)},
    'components/link-button/playground/playground-test-link/index.html': {size: 101872, hash: '9cc5070a10265e9d2ed424647f6b213fd496a94a5917a59262d90143ec2cac5b', text: () => import('./assets-chunks/components_link-button_playground_playground-test-link_index_html.mjs').then(m => m.default)},
    'components/theme-toggle/playground/index.html': {size: 88343, hash: 'f7c0eceffe7bf01b8f3b27d11b62ccad88016ff11440e687468199585687a842', text: () => import('./assets-chunks/components_theme-toggle_playground_index_html.mjs').then(m => m.default)},
    'components/content-card/playground/index.html': {size: 91042, hash: 'e7721ba2cac6a15cf8727c5980dff8a77de2c2b63c1acf30b702999aff84b865', text: () => import('./assets-chunks/components_content-card_playground_index_html.mjs').then(m => m.default)},
    'components/scroll-nav/playground/index.html': {size: 86616, hash: '2190c4df1c5b456b9cebab7a51decbc50c9fabe7e878137f5b40faafb4a70d60', text: () => import('./assets-chunks/components_scroll-nav_playground_index_html.mjs').then(m => m.default)},
    'components/hero-carousel/playground/index.html': {size: 107675, hash: '3217dc5371b4b9e8cd78c68728cf7d882d7402019b0c18191e4c0f0074c3b63d', text: () => import('./assets-chunks/components_hero-carousel_playground_index_html.mjs').then(m => m.default)},
    'components/content-carousel/playground/index.html': {size: 112505, hash: 'b7b5a773ddbcf4bf3ef0f2876a26c4418d331c360c5e7e8e0c613cbfed954714', text: () => import('./assets-chunks/components_content-carousel_playground_index_html.mjs').then(m => m.default)},
    'kits/index.html': {size: 60566, hash: '70bad6295813354420bbaa27039f79c018f94029f4f4f4e6a5e9bae93654884c', text: () => import('./assets-chunks/kits_index_html.mjs').then(m => m.default)},
    'kits/button-kit/index.html': {size: 75948, hash: 'f4c237059e15bda62de1f84319691bb0b5499c338bdff8b00a2007b19ba94de1', text: () => import('./assets-chunks/kits_button-kit_index_html.mjs').then(m => m.default)},
    'components/expand/playground/index.html': {size: 83665, hash: '74cbcf3a95e3d0ba14c63a172d5cbcecfbda22cfbd96d9fa62fa7c39b2f580dd', text: () => import('./assets-chunks/components_expand_playground_index_html.mjs').then(m => m.default)},
    'components/index.html': {size: 70142, hash: 'bedf9762d2969f85d73d4662ef7fcaa602c84ca8a98abef3662e1ec9416ba819', text: () => import('./assets-chunks/components_index_html.mjs').then(m => m.default)},
    'components/menu-toggle/playground/index.html': {size: 88748, hash: '90c65b75ed18382f77e0831bfa4d64175bbcd42e25e37b4460c753116ab6c833', text: () => import('./assets-chunks/components_menu-toggle_playground_index_html.mjs').then(m => m.default)},
    'components/simple-button/documentation/index.html': {size: 94105, hash: 'f2551163a019a3a1963f563f1211b593ef35224f7e7abfbb92023e432f5205f6', text: () => import('./assets-chunks/components_simple-button_documentation_index_html.mjs').then(m => m.default)},
    'components/theme-toggle/documentation/index.html': {size: 96921, hash: '1cfa5fcc63556235a819cba04caed9037f8fe807f210108ab975aaffad9d117f', text: () => import('./assets-chunks/components_theme-toggle_documentation_index_html.mjs').then(m => m.default)},
    'components/hero-carousel/documentation/index.html': {size: 105778, hash: '92369e0e06d0d840c3184a4ec36f253acc1700ed56cd0fae3b24d6d89f48397a', text: () => import('./assets-chunks/components_hero-carousel_documentation_index_html.mjs').then(m => m.default)},
    'components/simple-button/playground/index.html': {size: 88404, hash: 'd3853cb806fed7fc0144e2fe701fcd8a3461e4b3e00735dcd90dfd926a506751', text: () => import('./assets-chunks/components_simple-button_playground_index_html.mjs').then(m => m.default)},
    'kits/toggle-kit/index.html': {size: 77732, hash: 'd00cb7b4dd59acba43930152648465f05c37f302920500e268f8809e999aaa79', text: () => import('./assets-chunks/kits_toggle-kit_index_html.mjs').then(m => m.default)},
    'components/menu-toggle/documentation/index.html': {size: 89695, hash: '917013810e2cd850c9c550d14b38b906ed18085ce6098481e6e89839d48c2505', text: () => import('./assets-chunks/components_menu-toggle_documentation_index_html.mjs').then(m => m.default)},
    'components/scroll-nav/documentation/index.html': {size: 92681, hash: 'e7429419d7786dd027b221d4d96740ba40a015cb5b4496c91b78bd8c8376c125', text: () => import('./assets-chunks/components_scroll-nav_documentation_index_html.mjs').then(m => m.default)},
    'kits/uux-kit/index.html': {size: 83563, hash: '3a7a3ee2cb58a8145e8bee5cba938f5a41c7ccfad4946f30b061de687dd9e639', text: () => import('./assets-chunks/kits_uux-kit_index_html.mjs').then(m => m.default)},
    'components/content-carousel/documentation/index.html': {size: 96835, hash: '022ec9c1015045b62c2eb78665f9863a14f1603b30bd67dcada4b3f46f5a3dab', text: () => import('./assets-chunks/components_content-carousel_documentation_index_html.mjs').then(m => m.default)},
    'components/content-card/documentation/index.html': {size: 90378, hash: '5be439922b91295cf9943d141c8b38514b2356105c794363c3e85bef32488a6d', text: () => import('./assets-chunks/components_content-card_documentation_index_html.mjs').then(m => m.default)},
    'components/link-button/documentation/index.html': {size: 98431, hash: '66539055f162d46399142a6fcf27e0f4c675caf2f69c1e9d2636ae29b7c8a7b3', text: () => import('./assets-chunks/components_link-button_documentation_index_html.mjs').then(m => m.default)},
    'components/expand/documentation/index.html': {size: 92146, hash: '03aca0c18adb9bc004f840ad9a2e9b83dd52ed4b570317be277dab4c227c62fe', text: () => import('./assets-chunks/components_expand_documentation_index_html.mjs').then(m => m.default)},
    'styles-LADIMXOO.css': {size: 4480, hash: 'Ipr1AdPpdM8', text: () => import('./assets-chunks/styles-LADIMXOO_css.mjs').then(m => m.default)}
  },
};
