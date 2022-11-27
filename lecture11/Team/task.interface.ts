import {TaskStatusEnum} from "./task-status.enum";

export interface TaskInterface {
    creator: string,
    executorName: string,
    task: string,
    status: TaskStatusEnum
}