import { FieldData } from "../interfaces/field-data";
import { ITask } from "../interfaces/task-list";

export interface TaskItemDetailState {
    Task: ITask,
    fields: FieldData[],
}