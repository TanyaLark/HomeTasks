import {Employee} from "./employee";
import {EmployeeInterface} from "./employee.interface";
import {PositionEnum} from "./position.enum";
import {RoleEnum} from "./role.enum";
import {TaskInterface} from "./task.interface";
import {TaskStatusEnum} from "./task-status.enum";

export class BusinessAnalyst extends Employee implements EmployeeInterface {
    constructor(position: PositionEnum, name: string, age: number, role: RoleEnum) {
        super(position, name, age, role);
    }

    work(task: TaskInterface): TaskInterface {
        console.log(`I'm analysing market for task:`);
        console.table(task);
        this.setTaskStatus(task);
        return task;
    }
}