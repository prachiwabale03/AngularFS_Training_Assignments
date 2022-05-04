import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  task:string="";
  index:number=0;
  checkedTask:string[]=[];
  flag:boolean=true;
  changedValue:string="";

  todoList:string[]=["Learn React Native","Practice ReactJs","Code Portfolio React","Learn SQl"];

  constructor() { }

  ngOnInit(): void {
    this.todoList;
  }

  select_Click(todo:string)
  {
   
    this.task=todo;
    this.index = this.todoList.findIndex(item => item == this.task);
  
  
   
  }
  update_Task(updatedValue:string)
  {
    
  

    this.todoList[this.index]=updatedValue;
    this.task="";
   
  }
  delete_ToDo(todo:string)
  {
    let index = this.todoList.findIndex(item => item == todo);
    this.todoList.splice(index, 1);
    
  }

  delete_Selected()
  {
  
    
    this.checkedTask.forEach(element => {
      let index = this.todoList.findIndex(item => item == element);
      this.todoList.splice(index,1);
    
    });
    this.checkedTask=[];
 
  }

  delete_AllTasks()
  {
     this.todoList=[];
  }

  store_checked(todo:string)
  {
    
     this.checkedTask.push(todo);
  }

  Add_Task(task:string)
  {
   if(this.todoList.includes(task))
   {
     alert("Task Already present");
     this.task="";
   }
   else
    this.todoList.push(task);
    this.task="";
  }
}
