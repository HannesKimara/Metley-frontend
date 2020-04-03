import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  visible: boolean;
  isloggedIn: boolean = false;

  constructor() { this.visible = true }

  hide () {this.visible = false}
  show () {this.visible = true}
  switch () {this.visible = !this.visible}
  
}