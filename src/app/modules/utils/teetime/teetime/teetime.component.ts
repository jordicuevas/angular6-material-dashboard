import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teetime',
  templateUrl: './teetime.component.html',
  styleUrls: ['./teetime.component.scss']
})
export class TeetimeComponent implements OnInit {
  horarios: string[] = ['6.30AM', '6.40AM', '6.50AM', '07.00AM', '07.10AM'];
  constructor() { }

  ngOnInit() {
  }

}
