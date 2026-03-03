import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks = [
    { id: 1, text: 'Изучить Angular', completed: false },
    { id: 2, text: 'Создать компонент', completed: true },
    { id: 3, text: 'Изучить директивы', completed: false }
  ];

  text = ''

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id)
    if (task) task.completed = !task.completed
  }
  createTask() {
    this.addTask(this.text)
  }
  addTask(text: string) {
    this.tasks.push({id: this.tasks.length+1, text, completed:false})
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id)
  }
}
