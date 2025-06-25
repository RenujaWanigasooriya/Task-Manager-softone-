import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html'
})
export class TaskEditorComponent {
  @Input() task: Task = { id: 0, title: '', isCompleted: false };

  constructor(private service: TaskService) { }

  save(): void {
    if (this.task.id) {
      this.service.updateTask(this.task).subscribe();
    } else {
      this.service.addTask(this.task).subscribe(t => this.task = t);
    }
  }

  newTask(): void {
    this.task = { id: 0, title: '', isCompleted: false };
  }
}
