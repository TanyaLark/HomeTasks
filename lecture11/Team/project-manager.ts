import {Employee} from "./employee";
import {PositionEnum} from "./position.enum";
import {RoleEnum} from "./role.enum";
import {TaskInterface} from "./task.interface";
import {faker} from '@faker-js/faker';
import {ProjectManagerInterface} from "./project-manager.interface";
import {TaskStatusEnum} from "./task-status.enum";

export class ProjectManager extends Employee implements ProjectManagerInterface {
    constructor(position: PositionEnum, name: string, age: number, role: RoleEnum) {
        super(position, name, age, role);
    }

    pmWork(employeeNames: string[]): TaskInterface[] {
        return employeeNames.map((name) => {
            const task = this.generateTask(name);
            console.log(`I'm create task ${JSON.stringify(task)} for ${name}`);
            return task;
        });
    }

    work(task: TaskInterface): TaskInterface {
        console.log(`I'm moving task in JIRA`);
        console.table(task);
        this.setTaskStatus(task);
        return task;
    }

    isProjectDone(tasks: TaskInterface[]): boolean{
        for (const task of tasks) {
            if(task.status !== TaskStatusEnum.DONE){
                return false;
            }
        }
        console.log('Congratulations!!! Project is done!!!');
       return true;
    }

    private generateTask(employeeName: string): TaskInterface {
        const taskDescription = faker.lorem.sentence(5);
        return this.createTask(employeeName, taskDescription);
    }
}
