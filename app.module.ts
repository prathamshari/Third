import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule } from '@angular/forms';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DinoJumpComponent } from './dino-jump/dino-jump.component';
import { FlappyBirdComponent } from './flappy-bird/flappy-bird.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ServiceComponent,
    RegisterComponent,
    FooterComponent,
    DinoJumpComponent,
    FlappyBirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
