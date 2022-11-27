import {TaskInterface} from "./task.interface";

export interface ProjectManagerInterface {
    pmWork(employeeNames: string[]): TaskInterface[];
    work(task: TaskInterface): TaskInterface;
    isProjectDone(tasks: TaskInterface[]): void;
}