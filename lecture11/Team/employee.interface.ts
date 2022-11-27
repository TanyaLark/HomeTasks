import {TaskInterface} from "./task.interface";

export interface EmployeeInterface {
    createTask(executorName: string, taskDescription:string): TaskInterface,

    setTaskStatus(task: TaskInterface): TaskInterface,

    work(task: TaskInterface): TaskInterface,
}