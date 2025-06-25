import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  selected?: Task;
  filter = '';
  sortAsc = true;

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.service.getTasks().subscribe(t => {
      this.tasks = t;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    let data = this.tasks;
    if (this.filter) {
      data = data.filter(x => x.title.toLowerCase().includes(this.filter.toLowerCase()));
    }
    data = data.sort((a, b) => this.sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    this.tasks = data;
  }

  select(task: Task): void {
    this.selected = { ...task };
  }

  delete(task: Task): void {
    this.service.deleteTask(task.id).subscribe(() => this.load());
  }
}
