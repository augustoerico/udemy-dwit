import { Status } from '../task.model';

export class FilterDto {
    status: Status;
    q: string;
}
