import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './shared/county.service';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeroFormComponent,
    PostComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
