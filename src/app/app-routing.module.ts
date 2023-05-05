import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/listing/listing.component').then(
        (m) => m.ListingComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./pages/detail/detail.component').then((m) => m.DetailComponent),
  },
];
