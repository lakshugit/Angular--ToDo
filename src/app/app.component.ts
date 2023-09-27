import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'TODOList';
  taskList:string[] = [];
  ngOnInit(): void {
    if (localStorage.getItem('my_tasks')) {
      this.taskList = JSON.parse(localStorage.getItem('my_tasks')!)

      
    }
    
  }

}
