import { FieldData } from "../interfaces/field-data";
import { IPersonal } from "../interfaces/personal";


export interface FormStates {
    data: IPersonal,
    fields: FieldData[],
}