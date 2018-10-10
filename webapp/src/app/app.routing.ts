import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { MainComponent }  from './main.component';
import { ErrorComponent } from './error.component';
import { FormComponent } from './form/form.component';
import { HeroChildComponent } from './form/hero-child.component';
import { CostHistoryComponent }  from './cost-history/cost-history.component';

const myRoutes = [
  { path: 'form', component: FormComponent,
    children: [
      { path: 'pages/:page', component: HeroChildComponent }
    ]
  },
  { path: 'cost-history', component: CostHistoryComponent },
  { path: '', component: MainComponent },
  //{ path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

export const MY_ROUTES: ModuleWithProviders = RouterModule.forRoot(myRoutes);
