import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pages = [
    {
      path: 'dashboard',
    },
    {
      path: 'advance',
    },
    {
      path: 'dermatome-myotome',
    },
    {
      path: 'history',
    },
    {
      path: 'investigation',
    },
    {
      path: 'joint-examination',
    },
    {
      path: 'muscles-examination',
    },
    {
      path: 'nds',
    },
    {
      path: 'poster-gait',
    },
    {
      path: 'reflex',
    },
    {
      path: 'special-test',
    },
  ];

}
