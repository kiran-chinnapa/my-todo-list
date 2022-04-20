import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultTaskServiceService {
  constructor() {}

  getDefaultTasks() {
    return ['default_task1', 'default_task2'];
  }
}
