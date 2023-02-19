import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotebookComponent } from './notebook/notebook.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NotebookComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NotebookComponent
  ]
})
export class NotesModule { }
