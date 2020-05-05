import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  public hiddenPassword = 'abcd1234';
  public displayPassword = false;
  public clickCounter = 0;
  public logs = [];

  constructor() { }

  ngOnInit() {
  }

  public handleClick() {
    this.displayPassword = !this.displayPassword;
    this.logs.push(`Button clicked ${++this.clickCounter} time(s)`);
  }
}
