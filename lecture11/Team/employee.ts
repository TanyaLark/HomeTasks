import {PositionEnum} from "./position.enum";
import {RoleEnum} from "./role.enum";
import {TaskInterface} from "./task.interface";
import {TaskStatusEnum} from "./task-status.enum";
import {EmployeeInterface} from "./employee.interface";

export class Employee implements EmployeeInterface {
    public position: PositionEnum;
    public name: string;
    public age: number;
    public role: RoleEnum;

    constructor(position: PositionEnum, name: string, age: number, role: RoleEnum) {
        this.position = position;
        this.name = name;
        this.age = age;
        this.role = role;
    }

    createTask(executorName: string, taskDescription: string): TaskInterface {
        return {
            creator: this.name,
            executorName: executorName,
            task: taskDescription,
            status: TaskStatusEnum.TO_DO
        };
    }

    setTaskStatus(task: TaskInterface): TaskInterface {
        if (this.name === task.executorName) {
            const currentStatus = task.status;
            switch (currentStatus) {
                case TaskStatusEnum.TO_DO:
                    task.status = TaskStatusEnum.IN_PROGRESS;
                    break;
                case TaskStatusEnum.IN_PROGRESS:
                    task.status = TaskStatusEnum.TESTING;
                    break;
                case TaskStatusEnum.TESTING:
                    task.status = TaskStatusEnum.DONE;
                    break;
            }
            return task;
        }
        throw new Error('Status of the task can change only task executor');
    }

    work(task: TaskInterface): TaskInterface {
        throw new Error('Method not implemented');
    }
}