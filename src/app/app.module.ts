import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { LoginbannerComponent } from './components/loginbanner/loginbanner.component';
import { LoginComponent } from './components/login/login.component';
import { HomesoftskillsComponent } from './components/homesoftskills/homesoftskills.component';
import { HomeprojectsComponent } from './components/homeprojects/homeprojects.component';
import { HomelifelessonsComponent } from './components/homelifelessons/homelifelessons.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { HomefooterComponent } from './components/homefooter/homefooter.component';
import { HomeexperiencesComponent } from './components/homeexperiences/homeexperiences.component';
import { HomecomputerskillsComponent } from './components/homecomputerskills/homecomputerskills.component';
import { HomecertificatesComponent } from './components/homecertificates/homecertificates.component';
import { HomebannerComponent } from './components/homebanner/homebanner.component';
import { HomeComponent } from './components/home/home.component';
import { EditionsoftskillsComponent } from './components/editionsoftskills/editionsoftskills.component';
import { EditionprojectsComponent } from './components/editionprojects/editionprojects.component';
import { EditionlifelessonsComponent } from './components/editionlifelessons/editionlifelessons.component';
import { EditionheaderComponent } from './components/editionheader/editionheader.component';
import { EditionfooterComponent } from './components/editionfooter/editionfooter.component';
import { EditionexperiencesComponent } from './components/editionexperiences/editionexperiences.component';
import { EditioncomputerskillsComponent } from './components/editioncomputerskills/editioncomputerskills.component';
import { EditioncertificatesComponent } from './components/editioncertificates/editioncertificates.component';
import { EditionbannerComponent } from './components/editionbanner/editionbanner.component';
import { EditionComponent } from './components/edition/edition.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    LoginbannerComponent,
    LoginComponent,
    HomesoftskillsComponent,
    HomeprojectsComponent,
    HomelifelessonsComponent,
    HomeheaderComponent,
    HomefooterComponent,
    HomeexperiencesComponent,
    HomecomputerskillsComponent,
    HomecertificatesComponent,
    HomebannerComponent,
    HomeComponent,
    EditionsoftskillsComponent,
    EditionprojectsComponent,
    EditionlifelessonsComponent,
    EditionheaderComponent,
    EditionfooterComponent,
    EditionexperiencesComponent,
    EditioncomputerskillsComponent,
    EditioncertificatesComponent,
    EditionbannerComponent,
    EditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
