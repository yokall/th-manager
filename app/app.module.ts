import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimePipe, TimeDurationPipe } from './time.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TimePipe, TimeDurationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
