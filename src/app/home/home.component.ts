import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Decision App';
  constructor(private router: Router) { }

  goCreateDesicion() {
    this.router.navigate(['createdecision']);
  }

  ngOnInit() {
  }

}
