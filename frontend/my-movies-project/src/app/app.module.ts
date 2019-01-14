import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/login/form/form.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { HeaderComponent } from './core/header/header.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { ListMovieItemComponent} from './shared/components/list-movie-item/list-movie-item.component';
import { TokenizedService } from './shared/services/tokenized.service';
import { AuthGuard } from './shared/gurads.js/auth.guard';
import { LoginPageGuard } from './shared/gurads.js/login-page.guard';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    MainContainerComponent,
    MoviesListComponent,
    AddMovieComponent,
    ListMovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [AuthenticationService, AuthGuard , LoginPageGuard ,
  {
    provide: HTTP_INTERCEPTORS ,
    useClass: TokenizedService ,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
