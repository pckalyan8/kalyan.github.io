import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotebookComponent } from './notes/notebook/notebook.component';
import { NotesModule } from './notes/notes.module';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'notebook', component: NotebookComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NotesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
