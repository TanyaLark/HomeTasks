import {faker} from '@faker-js/faker';
import {ProjectManager} from "./project-manager";
import {PositionEnum} from "./position.enum";
import {RoleEnum} from "./role.enum";
import {BusinessAnalyst} from "./business-analyst";
import {Developer} from "./developer";
import {QA} from "./qa";
import {Devops} from "./devops";
import {TaskInterface} from "./task.interface";

function getEmployeeName() {
    return faker.name.fullName();
}

function getEmployeeAge() {
    return Math.floor(Math.random() * 99) + 18;
}

const pm = new ProjectManager(PositionEnum.PM, getEmployeeName(), getEmployeeAge(), RoleEnum.DISTRIBUTION_OF_TASKS);
const productOwner = new ProjectManager(PositionEnum.PM, getEmployeeName(), getEmployeeAge(), RoleEnum.RELEASE);
const ba = new BusinessAnalyst(PositionEnum.BUSINESS_ANALYST, getEmployeeName(), getEmployeeAge(), RoleEnum.ANALYSIS_OF_DATA_FROM_THE_CLIENT);
const dev1 = new Developer(PositionEnum.BACK_END_DEVELOPER, getEmployeeName(), getEmployeeAge(), RoleEnum.DEVELOPMENT);
const dev2 = new Developer(PositionEnum.BACK_END_DEVELOPER, getEmployeeName(), getEmployeeAge(), RoleEnum.DEVELOPMENT);
const dev3 = new Developer(PositionEnum.FRONT_END_DEVELOPER, getEmployeeName(), getEmployeeAge(), RoleEnum.DEVELOPMENT);
const dev4 = new Developer(PositionEnum.FRONT_END_DEVELOPER, getEmployeeName(), getEmployeeAge(), RoleEnum.DEVELOPMENT);
const qa = new QA(PositionEnum.QA, getEmployeeName(), getEmployeeAge(), RoleEnum.TESTING);
const devops = new Devops(PositionEnum.DEV_OPS, getEmployeeName(), getEmployeeAge(), RoleEnum.DEPLOYING);

const team = [pm, productOwner, ba, dev1, dev2, dev3, dev4, qa, devops];
const names = team.map((employee) => {
    return employee.name;
});

const tasks: TaskInterface[] = pm.pmWork(names);

function workOnSprint() {
    for (const task of tasks) {
        for (const teamMember of team) {
            try {
                teamMember.work(task);
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                }
            }
        }
    }
}

while (!productOwner.isProjectDone(tasks)) {
    workOnSprint();
}


