import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() toggleMode = new EventEmitter<String>();
  username: string = '';
  password: string = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  toogleLogin(){
    this.toggleMode.emit()
  }

  login(){
    if (this.username && this.password) {
      console.log('Login successful');
      this.router.navigate(['/dashboard']); // Navigate to the new component route

    } else {
      console.log('Invalid login credentials');
    }
  }

}
