import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheBasicsComponent } from './the-basics.component';
import { Task3Component } from './task3/task3.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [TheBasicsComponent, Task3Component]
})
export class TheBasicsModule { }
