import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { SidebarModule } from './components/sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent, PageOneComponent, PageTwoComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
