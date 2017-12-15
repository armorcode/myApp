import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestService } from './services/test.service';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './services/gallery.service';
import { HttpModule } from '@angular/http';
import { InteractionComponent } from './interaction/interaction.component';
import { FireTestComponent } from './fire-test/fire-test.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { AfService } from './services/af.service';

import { Router } from '@angular/router';

const routes: Routes = [
  { path: "comments", component: TestComponent },
  { path: "contact", component: ContactComponent },
  { path: "gallery", component: GalleryComponent }, 
  { path: "fireTest", component: FireTestComponent },  
  
  { path: "", redirectTo: "/contact", pathMatch: "full" }


];
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactComponent,
    GalleryComponent,
    InteractionComponent,
    FireTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [TestService, GalleryService,AngularFireDatabase, AfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
