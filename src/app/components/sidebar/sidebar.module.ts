import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  exports: [SidebarComponent],
})
export class SidebarModule {}
