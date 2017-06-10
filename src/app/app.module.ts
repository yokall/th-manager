import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PositionPipe } from './position.pipe';
import { TimePipe, TimeDurationPipe } from './time.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, PositionPipe, TimePipe, TimeDurationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
