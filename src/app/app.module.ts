import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PipesTryComponent } from './components/pipes-try/pipes-try.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { AppRoutingModule } from "./app-routing.module";
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { ParentComponent } from './components/parent/parent.component';
import { EmployeeOverviewComponent } from './components/employee-overview/employee-overview.component';
import { EmployeeAddressComponent } from './components/employee-address/employee-address.component';
import { FormsTryComponent } from './components/forms-try/forms-try.component';
import { LifecyclesComponent } from './components/lifecycles/lifecycles.component';
import { LifecyclesChildComponent } from './components/lifecycles-child/lifecycles-child.component';
import { EagerLoadingModule } from './loading-strategies/eager-loading-module/eager-loading.module';
import { CustomPreloadingStrategy } from './loading-strategies/custom-preloading-strategy';
import { HttpRequestInterceptor } from "./interceptors/http-request.interceptor";
import { LoginAuthGuard } from "./guards/login-auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    EmployeeListComponent,
    PipesTryComponent,
    GreetingPipe,
    EmployeeDetailComponent,
    ParentComponent,
    EmployeeOverviewComponent,
    EmployeeAddressComponent,
    FormsTryComponent,
    LifecyclesComponent,
    LifecyclesChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EagerLoadingModule
  ],
  providers: [EmployeeService, CustomPreloadingStrategy, HttpRequestInterceptor, LoginAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
