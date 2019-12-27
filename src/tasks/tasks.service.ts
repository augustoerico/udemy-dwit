import { Injectable } from '@nestjs/common';
import { Task, Status } from './task.model';
import * as uuid from 'uuid/v1';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    create(createDto: CreateDto): Task {
        const { title, description } = createDto;
        const task: Task = {
            title,
            description,
            status: Status.OPEN,
            id: uuid(),
        };
        this.tasks.push(task);
        return task;
    }

    read(id: string): Task {
        return this.tasks.find(i => i.id === id);
    }

    readMany(_: FilterDto = null) {
        return this.tasks;
    }

    update(id: string, updateDto: UpdateDto): Task {
        const { status } = updateDto;

        let task = this.tasks.find(i => i.id === id);
        if (task) {
            task = {
                ...task,
                status,
            };
            this.tasks = this.tasks.map(i => i.id === task.id ? task : i);
        }

        return task;
    }

    delete(id: string): void {
        this.tasks = this.tasks.filter(i => i.id !== id);
    }
}
