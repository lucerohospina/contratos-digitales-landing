import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/base/components/form/form.component';
import { BaseComponent } from './components/base/base.component';
import { HeadlineComponent } from './components/base/components/headline/headline.component';
import { FeaturesComponent } from './components/base/components/features/features.component';
import { StatisticsComponent } from './components/base/components/statistics/statistics.component';
import { ContractsComponent } from './components/base/components/contracts/contracts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    BaseComponent,
    HeadlineComponent,
    FeaturesComponent,
    StatisticsComponent,
    ContractsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
