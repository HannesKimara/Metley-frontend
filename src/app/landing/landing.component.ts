import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public nav:NavService) { }

  ngOnInit(): void {
    this.nav.visible = true;
  }

}
