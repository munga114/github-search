import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GitHubServiceService } from './git-hub-service.service';
import { DaysCountPipe } from './days-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RepositoriesComponent,
    NavbarComponent,
    DaysCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitHubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
