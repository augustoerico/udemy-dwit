import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    create(@Body() createDto: CreateDto): Task {
        return this.tasksService.create(createDto);
    }

    @Get(':id')
    read(@Param('id') id: string): Task {
        return this.tasksService.read(id);
    }

    @Get()
    readMany(): Task[] {
        return this.tasksService.readMany();
    }

    @Post(':id')
    update(
        @Param('id') id: string,
        @Body() updateDto: UpdateDto,
    ): Task {
        return this.tasksService.update(id, updateDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        this.tasksService.delete(id);
    }
}
