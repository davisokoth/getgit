import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ MainComponent],
  exports: [
    FormsModule, ReactiveFormsModule, MainComponent
  ]
})
export class SharedModule { }
