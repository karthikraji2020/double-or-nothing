import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BetService } from './service/bet.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavbarComponent,
    MainContainerComponent,
    SearchbarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [BetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
