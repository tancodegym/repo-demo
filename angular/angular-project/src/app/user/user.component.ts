import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  //String interpolation. {{}} Binding value từ View Modal -> View
  name: string = 'ABC';

  age : number = 15;

  count = 0;
  // Properties binding. []  Binding properties từ View Modal -> View
  isDisabled: boolean = true;
  constructor(){};
  ngonInit(): void {

  };
  show(text: string): void{  
    console.log(text);
  }
  changeName(event: any): void{
    // this.name= event.target.value;
  }

  increaseCount(event: number): void{
    this.count +=event;
  }

}