import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'post', component: PostComponent },
  { path: 'hero-form', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
