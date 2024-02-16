import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContenuComponent } from './components/contenu/contenu.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewEffects } from './store/effects/review.effects';
import { reviewReducer } from './store/reducers/reviews.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContenuComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      reviews: reviewReducer
    }),
    EffectsModule.forRoot([ReviewEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
