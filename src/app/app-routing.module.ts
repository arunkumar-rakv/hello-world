import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from "./components/parent/parent.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { PipesTryComponent } from "./components/pipes-try/pipes-try.component";
import { EmployeeDetailComponent } from "./components/employee-detail/employee-detail.component";
import { EmployeeOverviewComponent } from "./components/employee-overview/employee-overview.component";
import { EmployeeAddressComponent } from "./components/employee-address/employee-address.component";
import { FormsTryComponent } from "./components/forms-try/forms-try.component";
import { LifecyclesComponent } from "./components/lifecycles/lifecycles.component";

import { EagerHomeComponent } from './loading-strategies/eager-loading-module/eager-home/eager-home.component';
import { EagerChild1Component } from './loading-strategies/eager-loading-module/eager-home/eager-child1/eager-child1.component';
import { EagerChild2Component } from './loading-strategies/eager-loading-module/eager-home/eager-child2/eager-child2.component';
import { CustomPreloadingStrategy } from './loading-strategies/custom-preloading-strategy';
import { LoginAuthGuard } from "./guards/login-auth.guard";
const routes: Routes = [
    { path: 'parent', component: ParentComponent },
    { path: 'employees', component: EmployeeListComponent, canActivate: [LoginAuthGuard] },
    { path: 'employees/:id', component: EmployeeDetailComponent,
        
        children: [{
            path: 'overview', component: EmployeeOverviewComponent
        }, {
            path: 'address', component: EmployeeAddressComponent
        }] },
    { path: 'pipes', component: PipesTryComponent },
    { path: 'forms', component: FormsTryComponent },
    { path: 'lifecycles', component: LifecyclesComponent },
    { path: 'eager-loading', component: EagerHomeComponent, children: [
          { path: '', redirectTo: 'child1', pathMatch: 'full' },
          { path: 'child1', component: EagerChild1Component },
          { path: 'child2', component: EagerChild2Component },
          { path: '**', redirectTo: 'child1' }
        ]
    },
    { path: 'lazy-loading',
      loadChildren: './loading-strategies/lazy-loading-module/lazy-loading.module#LazyLoadingModule'
    },
    { path: 'pre-loading',
      loadChildren: './loading-strategies/pre-loading-module/pre-loading.module#PreLoadingModule',
      data: { applyPreload: true }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, 
        { preloadingStrategy: CustomPreloadingStrategy }
    )],
    exports: [RouterModule]
})

export class AppRoutingModule {}