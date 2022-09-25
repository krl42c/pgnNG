import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TrackerComponent } from './tracker/tracker.component';
import { DataloaderComponent } from './dataloader/dataloader.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TrackerComponent,
    DataloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
