import { model,TodoItem } from './../Model/model';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoAngular2';
  model=new model();

  getName(){
    return this.model.user;
  }
  getToDoItems(){
    return this.model.items;
  }
  addItem(newTask: string){
    if(newTask != ""){
      this.model.items.push( new TodoItem(newTask,false));
    }
  }
}
