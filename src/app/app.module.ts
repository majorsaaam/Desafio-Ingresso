import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgPipesModule} from 'ngx-pipes';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgPipesModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
