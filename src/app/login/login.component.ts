import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  data: any = {};

  ngOnInit() {}
  masuk(data) {
    if (data.username === 'irfan' && data.password === '113333') {
      this.router.navigate(['/home']);
    }
  }
}
