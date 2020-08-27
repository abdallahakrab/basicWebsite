import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleImageComponent } from './components/article-image/article-image.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { HomeSec1Component } from './components/home-sec1/home-sec1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleImageComponent,
    TextButtonComponent,
    ProfileFormComponent,
    HomeComponent,
    ErrorMessageComponent,
    HomeSec1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
