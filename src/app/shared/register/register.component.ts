import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() toggleMode = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }
  toogleLogin(){
    this.toggleMode.emit()
  }

}
