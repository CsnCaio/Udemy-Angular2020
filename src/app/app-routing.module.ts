import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task3Component } from './components/sections/the-basics/task3/task3.component';


const routes: Routes = [
  {
    path: 'the-basics',
    children: [
      {
        path: 'task-3',
        component: Task3Component,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
