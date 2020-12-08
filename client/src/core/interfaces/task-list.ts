export interface ITask {
    Id: number;
    Title: string;
    Description: string;
    Status: StatusType;
}

export enum StatusType {
    Todo,
    InProgess,
    Pending,
    Completed
}
