import { BrowserModule }           from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule }                from '@angular/core';
import { AppComponent }            from './app.component';
import { AppLayoutComponent }      from './app-layout.component';
import { EventFormComponent }      from './event-form.component';
import { LoginButtonComponent }    from './login-button.component';
import { AddEventButtonComponent } from './add-event-button.component';
import { LoginComponent }          from './login.component';
import { APP_ROUTES_PROVIDER }     from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  declarations: [ 
    AppComponent, 
    AppLayoutComponent,
    EventFormComponent,
    LoginComponent,
    LoginButtonComponent,
    AddEventButtonComponent
  ],
  providers: [
    APP_ROUTES_PROVIDER
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }