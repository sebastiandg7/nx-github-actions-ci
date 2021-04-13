import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AdminWebLib1Module } from '@myorg/admin-web/lib1';
import { AdminWebLib2Module } from '@myorg/admin-web/lib2';
import { AdminWebLib3Module } from '@myorg/admin-web/lib3';
import { AdminWebLib4Module } from '@myorg/admin-web/lib4';
import { AdminWebLib5Module } from '@myorg/admin-web/lib5';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AdminWebLib1Module,
    AdminWebLib2Module,
    AdminWebLib3Module,
    AdminWebLib4Module,
    AdminWebLib5Module,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
