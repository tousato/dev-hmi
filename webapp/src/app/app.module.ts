import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MY_ROUTES }   from './app.routing';

import { AppComponent }   from './app.component';
import { MainComponent }  from './main.component';
import { ErrorComponent } from './error.component';
import { FormComponent }  from './form/form.component';
import { HeroChildComponent } from './form/hero-child.component';
import { CostHistoryComponent }  from './cost-history/cost-history.component';
import { CostHistoryChildComponent }  from './cost-history/cost-history-child.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, MY_ROUTES, HttpClientModule],
  declarations: [ AppComponent, MainComponent,
    ErrorComponent, FormComponent, HeroChildComponent, 
    CostHistoryComponent, CostHistoryChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
