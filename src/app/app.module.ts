import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PipesTryComponent } from './pipes-try/pipes-try.component';
import { GreetingPipe } from './greeting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    EmployeeListComponent,
    PipesTryComponent,
    GreetingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
